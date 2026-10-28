# Ogu–Bolo LGA Website — Professional Starter

This improved static prototype is based on the uploaded **Ogu-Bolo LGA Website - Complete Code.docx**. It keeps the original eight-page structure and green/gold identity while improving responsive design, navigation, accessibility, content clarity and basic interactions.

## Files
- `index.html` — Home
- `about.html` — About Ogu–Bolo
- `government.html` — Government and leadership template
- `departments.html` — Department directory template
- `services.html` — Service directory and FAQ
- `news.html` — Searchable announcement templates
- `gallery.html` — Illustrative photo gallery
- `contact.html` — Contact template and demo enquiry form
- `css/style.css` — Shared responsive styling
- `js/main.js` — Navigation, news search, demo form and current year

## Important before publication
This is **not yet an official live government website**. Confirm leadership names, contact details, history, ward information, fees, service requirements and announcements with authorised council sources. Gallery photos are illustrative stock images and must be replaced with genuine, permitted images. Do not claim this site is official without authorisation.

The contact form validates fields in the browser but does not send or store submissions. Connect an approved, secure form service or backend before collecting residents' information. Add a privacy notice, spam protection and a process for handling messages.

## Open on a computer
1. Extract this ZIP.
2. Open the `ogu-bolo-lga-professional` folder in Visual Studio Code.
3. Install the **Live Server** extension if needed.
4. Right-click `index.html` and select **Open with Live Server**.
5. Test all eight pages, navigation, news search and demo form.

Alternative: run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Preview on your phone
For a phone preview, upload the project to a temporary static host when ready, or run a local server on your computer and connect your phone to the same Wi-Fi network using the computer's local IP address. Do not publish sensitive information or label it official without approval.

## Recommended next steps
1. Verify all official facts and collect approved text and photos.
2. Review each page on phone and computer.
3. Connect and test the contact form securely.
4. Add privacy information, accessibility checks and a content-update process.
5. Arrange authorised hosting/domain and publication approval.
6. Test links, keyboard navigation, page titles, responsiveness and loading before launch.


## October 2026 update
- Added the supplied Ogu–Bolo LGA logo to the site header and footer.
- Restored the missing `css/style.css` and `js/main.js` files, including responsive mobile navigation.
- Updated the Government page with a source-linked Chairman profile based on the Rivers State Ministry of Information & Communications report dated 14 November 2025. The source supports the reported chairmanship, councillor swearing-in and announced empowerment-plan details; it does not provide a full biography or portrait. Verify current officeholder status before presenting the page as current official information.
- To update the existing Netlify site, upload the complete extracted website folder (the folder containing `index.html`, `css`, `js`, and `images`) through the Netlify site’s Deploys page or supported manual deploy flow. Do not upload only `index.html`.


## Latest revision
- Added a fixed, always-visible News Flash strip to all eight pages. The sample item links to the Rivers State Ministry of Information & Communications report about the Bolo solar mini-grid project (11 July 2026). Update this text and link only with verified new notices.
- Added gallery photo cards. Only the canoe/creek image is identified as an Ogu-Bolo photograph; the other images are illustrative references.
- The chairman profile image panel is explicitly illustrative and links to an official Ministry article showing the chairman in a group photograph. Replace with an approved portrait before presenting this prototype as an official website.
- This is still a website concept/prototype, not an authorised government website.


## Ward projects page update
This demo now includes `ward-projects.html` with a Ward 1–12 directory, project-tracking sections and upcoming-project categories. Ward representatives and project records are explicitly marked as awaiting official verification. A Ministry source confirms six Supervisory Councillors sworn in on 14 November 2025; it does not establish ward-councillor assignments.


## In-site news reader update
Featured Ministry stories can be read inside this website without opening an external article page. The Home and News & Events pages attempt to load recent posts from the Ministry public WordPress REST API. If browser CORS or the source server prevents the live feed, the two featured stories remain available as local readable content. Live updates require internet access.


## Bursary account flow prototype
- `bursary.html`: student sign-up
- `signin.html`: sign-in
- `forgot-password.html`: demo password reset
- `bursary-application.html`: application form after sign-in
- The account and draft features use browser storage only and are not secure authentication. Do not use real passwords or upload real identity documents. A real service requires server-side accounts, password hashing, verified password reset, secure file storage, authorization and server-verified CAPTCHA. Profile pictures are limited to 2 MB in the browser UI.


## Student sign-in greeting and password strength (demo)
- Sign-up checks password strength in the browser and displays a strength indicator.
- After registration, the sign-in page displays a personalized welcome message.
- After sign-in, the application page uses the local time for Good morning/afternoon/evening and greets the student by first name.
- If a saved draft exists in this browser for the account, a distinct returning-student message is shown.
- This is client-side demonstration logic only. Accounts/passwords and drafts are stored in browser localStorage; this is not secure production authentication. Do not use real passwords or sensitive identity data until a secure backend is implemented.


## Real forms and news admin (added)
- **Contact form** and **bursary application** now submit to Netlify Forms. After deploying, open the site in Netlify, then Forms, to view submissions, set email notifications and export to CSV. Total upload size per submission is limited to 8 MB.
- Sign-in on the bursary pages is still a browser-only demo (not secure). Before collecting real NIN documents, move accounts and file storage to a secure backend such as Supabase, and add a privacy notice.
- **News admin:** open `/admin/` to add posts. Posts are saved to `content/news.json` and appear on the News page and the Home page automatically. The admin needs the site in a GitHub repository connected to Netlify, and `admin/config.yml` edited with your repo name. Paragraphs in a story are separated by a blank line.
- The red News Flash strip is still edited by hand in each page's HTML.
