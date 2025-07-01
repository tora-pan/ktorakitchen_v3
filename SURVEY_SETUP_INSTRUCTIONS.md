# 📊 Survey Data Collection Setup

## 🎯 Google Sheets Setup (Recommended - 100% Free)

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Katsu Curry Survey Responses"
4. In the first row, add these headers:
   ```
   A1: Timestamp
   B1: Overall Rating
   C1: Taste Rating
   D1: Spice Level
   E1: Texture Rating
   F1: Would Recommend
   G1: Favorite Aspect
   H1: Improvements
   I1: Visit Frequency
   J1: Additional Comments
   ```

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste this **IMPROVED VERSION**:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet (make sure you're in the right sheet)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Log the received data (for debugging)
    console.log('Received data:', data);
    
    // Prepare the row data in the same order as your headers
    var rowData = [
      data.timestamp || new Date().toISOString(),
      data.overallRating || '',
      data.tasteRating || '',
      data.spiceLevel || '',
      data.textureRating || '',
      data.wouldRecommend || '',
      data.favoriteAspect || '',
      data.improvements || '',
      data.visitFrequency || '',
      data.additionalComments || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error', 
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Add a simple GET function for testing
function doGet(e) {
  return ContentService
    .createTextOutput('Survey script is working! POST your data here.')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 3: Deploy the Script
1. Click **Deploy > New deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy**
6. **IMPORTANT**: You'll see a security warning - click "Review permissions"
7. **Select your Google account**
8. Click "Advanced" then "Go to [Your Project Name] (unsafe)"
9. Click "Allow" to grant permissions
10. **Copy the Web app URL** (it looks like: `https://script.google.com/macros/s/ABC123.../exec`)

### Step 3.5: 🔧 TROUBLESHOOTING 403 ERROR
If you get a 403 error, follow these steps:

**Option A: Redeploy (Most Common Fix)**
1. Go back to your Apps Script
2. Click **Deploy > Manage deployments**
3. Click the pencil icon (Edit) next to your deployment
4. Change the version to "New Version"
5. Click **Deploy**
6. Use the NEW URL that's generated

**Option B: Check Permissions**
1. In Apps Script, go to **Settings** (gear icon)
2. Make sure "Show 'appsscript.json' manifest file" is checked
3. Go back to **Editor** and click on `appsscript.json`
4. Make sure it contains:
```json
{
  "timeZone": "America/New_York",
  "dependencies": {
    "enabledAdvancedServices": []
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

**Option C: Test with a Simple Function First**
1. Replace your code temporarily with:
```javascript
function doPost(e) {
  return ContentService
    .createTextOutput('Hello World')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet(e) {
  return ContentService
    .createTextOutput('GET request works')
    .setMimeType(ContentService.MimeType.TEXT);
}
```
2. Deploy this version
3. Test the URL in your browser - you should see "GET request works"
4. If that works, replace with the original survey code

### Step 4: Update Your Code
1. In your `Survey.tsx` file, replace `YOUR_SCRIPT_ID` with your actual script URL
2. Change this line:
   ```typescript
   await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
   ```
   To:
   ```typescript
   await fetch('https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec', {
   ```

### Step 5: Test It!
1. Submit a test survey on your website
2. Check your Google Sheet - you should see the response appear!

---

## 🔧 Alternative Options:

### Option 2: Airtable (Great UI)
1. Sign up at [Airtable.com](https://airtable.com)
2. Create a base with your survey fields
3. Get your API key from account settings
4. Use their REST API to send data

### Option 3: Supabase (Developer-friendly)
1. Sign up at [Supabase.com](https://supabase.com)
2. Create a new project
3. Create a table with your survey columns
4. Use their JavaScript client to insert data

### Option 4: Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to your form
2. Data appears in Netlify dashboard
3. Super simple but limited

---

## 📈 Viewing Your Data

### Google Sheets Benefits:
- ✅ **Real-time updates**
- ✅ **Easy filtering and sorting**
- ✅ **Create charts and graphs**
- ✅ **Export to Excel/CSV**
- ✅ **Share with team members**
- ✅ **Free forever**

### Sample Data Analysis:
- **Average ratings** per category
- **Most common complaints** in improvements
- **Popular aspects** customers love
- **Spice level preferences**
- **Recommendation rate**

---

## 🚨 Important Notes:

1. **Privacy**: This setup is anonymous - no personal data is collected
2. **CORS**: We use `no-cors` mode to avoid browser restrictions
3. **Error Handling**: Form shows success even if there are network issues
4. **Rate Limiting**: Google Apps Script has daily limits (but plenty for a restaurant)
5. **403 Error**: Usually means permissions issue - follow the troubleshooting steps above

## 🔍 Common Issues & Solutions:

### Issue 1: 403 Forbidden Error
- **Cause**: Script permissions not properly granted
- **Solution**: Redeploy with new version (see Step 3.5)

### Issue 2: Data Not Appearing in Sheet
- **Cause**: Wrong sheet selected or script error
- **Solution**: Check Apps Script logs (View > Logs) for errors

### Issue 3: CORS Errors in Browser Console
- **Cause**: Browser blocking cross-origin requests
- **Solution**: This is normal with `no-cors` mode - data still gets sent

### Issue 4: Script Timeout
- **Cause**: Google Apps Script execution limit
- **Solution**: Simplify the script or add error handling

## 🎉 You're All Set!

Once configured, every survey submission will automatically appear in your Google Sheet with timestamps. You can then analyze the data to improve your katsu curry recipe!
