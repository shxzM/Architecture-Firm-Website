# Test Cases - Tashdid Architects Website

## Public Website Test Cases

### Navigation Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-001 |
| Test Title | Desktop Navigation Menu Functionality |
| Preconditions | Website is loaded and accessible |
| Test Steps | 1. Load the website<br>2. Verify all menu items are visible<br>3. Click each menu item<br>4. Verify navigation to correct pages |
| Test Data | Menu items: Home, Projects, Services, About Us, Contact |
| Expected Result | All menu items should be visible and correctly navigate to their respective pages |
| Actual Result | All menu items are visible and correctly navigated to their respective pages|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-002 |
| Test Title | Mobile Navigation Menu (Hamburger) |
| Preconditions | Website is loaded on a mobile device or mobile view |
| Test Steps | 1. Load the website<br>2. Verify hamburger menu is visible<br>3. Click hamburger menu<br>4. Verify all menu items appear<br>5. Click each menu item<br>6. Verify navigation to correct pages |
| Test Data | Menu items: Home, Projects, Services, About Us, Contact |
| Expected Result | Hamburger menu should open, show all items, and correctly navigate to respective pages |
| Actual Result | Hamburger is visible on mobile and opens the menu, shows all the items and correctly navigate to the respective pages|
| Status | Passed|
| Remarks | |

### Home Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-003 |
| Test Title | Featured Projects Slider |
| Preconditions | Home page is loaded |
| Test Steps | 1. Load home page<br>2. Verify slider is visible<br>3. Check if projects are displayed<br>4. Click navigation arrows<br>5. Click on a project in slider |
| Test Data | Featured projects from database |
| Expected Result | Slider should show projects, navigate smoothly, and clicking a project should open its details |
| Actual Result | Slider shows projects, navigates smoothly, and clicking a project is opening its details|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-004 |
| Test Title | Home Page Navigation Buttons |
| Preconditions | Home page is loaded |
| Test Steps | 1. Load home page<br>2. Locate all navigation buttons<br>3. Click each button<br>4. Verify navigation to correct paths |
| Test Data | Navigation buttons:<br>- View Projects<br>- Our Services<br>- Contact Us<br>- About Us |
| Expected Result | Each button should navigate to its respective section or page |
| Actual Result | Clicking each button navigates to it's respective page|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-004.1 |
| Test Title | Home Page Contact Form - Complete Submission |
| Preconditions | Home page is loaded |
| Test Steps | 1. Scroll to contact form at bottom of home page<br>2. Fill in all required fields:<br>   - Name<br>   - Email<br>   - Phone<br>   - Location<br>   - Budget<br>   - Message<br>3. Click submit button<br>4. Verify form submission<br>5. Check admin panel for new message |
| Test Data | Valid contact form data:<br>- Name: "John Doe"<br>- Email: "john@example.com"<br>- Phone: "1234567890"<br>- Location: "New York"<br>- Budget: "100000"<br>- Message: "Test message" |
| Expected Result | 1. Form should submit successfully<br>2. Success message should appear<br>3. Message should appear in admin panel |
| Actual Result | 1. Form submits successfully<br>2. Success message appears as an alert<br>3. Message appears in admin panel|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-004.2 |
| Test Title | Home Page Contact Form - Incomplete Submission |
| Preconditions | Home page is loaded |
| Test Steps | 1. Scroll to contact form at bottom of home page<br>2. Fill in only some required fields<br>3. Click submit button<br>4. Verify validation messages<br>5. Try different combinations of missing fields |
| Test Data | Test cases:<br>1. Empty form<br>2. Only name filled<br>3. Only email filled<br>4. Missing phone<br>5. Missing location<br>6. Missing budget<br>7. Missing message |
| Expected Result | 1. Form should not submit<br>2. Error messages should appear for missing fields<br>3. No message should be sent to admin<br>4. Form should remain on page with entered data |
| Actual Result | 1. Form is not submitting<br>2. Error messages is appearing for missing fields<br>3. No message is sent to admin<br>4. Form is remaining on page with entered data|
| Status | Passed|
| Remarks | |

### Projects Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-005 |
| Test Title | Project Grid Display |
| Preconditions | Projects page is loaded |
| Test Steps | 1. Load projects page<br>2. Verify project grid layout<br>3. Check if all projects are displayed<br>4. Verify project card information |
| Test Data | Projects from database |
| Expected Result | Projects should be displayed in a grid with correct information (image, title, location, type) |
| Actual Result | Projects are displayed in a grid with correct information|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-006 |
| Test Title | Project Card Click Functionality |
| Preconditions | Projects page is loaded |
| Test Steps | 1. Load projects page<br>2. Click on a project card<br>3. Verify navigation to project details |
| Test Data | Any project card |
| Expected Result | Clicking a project card should navigate to its detailed view |
| Actual Result | Clicking on a Project Card is navigating to its detailed view|
| Status | Passed|
| Remarks | |

### Project Details Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-007 |
| Test Title | Project Image Gallery |
| Preconditions | Project details page is loaded |
| Test Steps | 1. Load project details page<br>2. Verify all project images are displayed<br>3. Click on an image<br>4. Verify full-screen view<br>5. Click outside image to close |
| Test Data | Project images |
| Expected Result | Images should display in gallery, open in full-screen on click, and close properly |
| Actual Result | Project Images are displayed after project details and open in full-screen on click and close properly|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-008 |
| Test Title | Featured Projects Section |
| Preconditions | Project details page is loaded |
| Test Steps | 1. Load project details page<br>2. Scroll to featured projects section<br>3. Verify featured projects are displayed<br>4. Click on a featured project |
| Test Data | Featured projects (excluding current project) |
| Expected Result | Should show 3 random projects and navigate to their details when clicked |
| Actual Result | Show 3 Random Projects as featured Projects at the bottom and navigates to their details them when clicked|
| Status | Passed|
| Remarks | |

### Contact Page Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-009 |
| Test Title | Home Page Contact Form - Complete Submission |
| Preconditions | Home page is loaded |
| Test Steps | 1. Scroll to contact form at bottom of home page<br>2. Fill in all required fields:<br>   - Name<br>   - Email<br>   - Phone<br>   - Location<br>   - Budget<br>   - Message<br>3. Click submit button<br>4. Verify form submission<br>5. Check admin panel for new message |
| Test Data | Valid contact form data:<br>- Name: "John Doe"<br>- Email: "john@example.com"<br>- Phone: "1234567890"<br>- Location: "New York"<br>- Budget: "100000"<br>- Message: "Test message" |
| Expected Result | 1. Form should submit successfully<br>2. Success message should appear<br>3. Message should appear in admin panel |
| Actual Result | 1. Form submits successfully<br>2. Success message appears as an alert<br>3. Message appears in admin panel|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-010 |
| Test Title | Home Page Contact Form - Incomplete Submission |
| Preconditions | Home page is loaded |
| Test Steps | 1. Scroll to contact form at bottom of home page<br>2. Fill in only some required fields<br>3. Click submit button<br>4. Verify validation messages<br>5. Try different combinations of missing fields |
| Test Data | Test cases:<br>1. Empty form<br>2. Only name filled<br>3. Only email filled<br>4. Missing phone<br>5. Missing location<br>6. Missing budget<br>7. Missing message |
| Expected Result | 1. Form should not submit<br>2. Error messages should appear for missing fields<br>3. No message should be sent to admin<br>4. Form should remain on page with entered data |
| Actual Result | 1. Form is not submitting<br>2. Error messages is appearing for missing fields<br>3. No message is sent to admin<br>4. Form is remaining on page with entered data|
| Status | Passed|
| Remarks | |

### Gallery Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-007 |
| Test Title | Project Image Gallery |
| Preconditions | Project details page is loaded |
| Test Steps | 1. Load project details page<br>2. Verify all project images are displayed<br>3. Click on an image<br>4. Verify full-screen view<br>5. Click outside image to close |
| Test Data | Project images |
| Expected Result | Images should display in gallery, open in full-screen on click, and close properly |
| Actual Result | Project Images are displayed after project details and open in full-screen on click and close properly|
| Status | Passed|
| Remarks | |


### Footer Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-011 |
| Test Title | Footer Links Functionality |
| Preconditions | Any page is loaded |
| Test Steps | 1. Scroll to footer<br>2. Click each footer link<br>3. Verify navigation |
| Test Data | Footer links (Privacy Policy, Terms of Service, etc.) |
| Expected Result | All footer links should navigate to correct pages |
| Actual Result | All Footer Links are Navigating to the correct Pages|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-012 |
| Test Title | Social Media Links |
| Preconditions | Any page is loaded |
| Test Steps | 1. Scroll to footer<br>2. Click each social media icon<br>3. Verify new tab opens<br>4. Verify correct social media page loads |
| Test Data | Social media links |
| Expected Result | Social media links should open in new tabs and load correct pages |
| Actual Result | All Social Media Links are working and opening a new Tab|
| Status | Passed|
| Remarks | |

### Responsive Design Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-013 |
| Test Title | Mobile Responsiveness |
| Preconditions | Website is accessible |
| Test Steps | 1. Open website on mobile device<br>2. Check all pages<br>3. Verify layout and functionality<br>4. Test touch interactions |
| Test Data | Mobile device or mobile view |
| Expected Result | Website should be fully functional and properly formatted on mobile devices |
| Actual Result | Website is fully functional and properly formatted on mobile devices|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-014 |
| Test Title | Tablet Responsiveness |
| Preconditions | Website is accessible |
| Test Steps | 1. Open website on tablet<br>2. Check all pages<br>3. Verify layout and functionality<br>4. Test touch interactions |
| Test Data | Tablet device or tablet view |
| Expected Result | Website should be fully functional and properly formatted on tablets |
| Actual Result | Website is fully functionalable and properly formatted on tablets|
| Status | Passed|
| Remarks | |

### Performance Testing

| Field | Description |
|-------|-------------|
| Test Case ID | TC-015 |
| Test Title | Page Load Time |
| Preconditions | Website is accessible |
| Test Steps | 1. Clear browser cache<br>2. Load each page<br>3. Measure load time<br>4. Check image loading |
| Test Data | All website pages |
| Expected Result | Pages should load within 3 seconds, images should load progressively |
| Actual Result | Page is loading within 3 seconds|
| Status | Passed|
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-016 |
| Test Title | Image Optimization |
| Preconditions | Website is loaded |
| Test Steps | 1. Load pages with images<br>2. Check image quality<br>3. Verify responsive images<br>4. Test different screen sizes |
| Test Data | All website images |
| Expected Result | Images should be optimized, load quickly, and display correctly at all sizes |
| Actual Result | |
| Status | |
| Remarks | Not Yet Implemented|

## Admin Portal Test Cases

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-001 |
| Test Title | Admin Login - Successful Login |
| Preconditions | Admin login page is loaded. Valid admin credentials are available. |
| Test Steps | 1. Navigate to `/admin`.<br>2. Enter correct admin password.<br>3. Click "Sign In". |
| Test Data | Password: [Valid Admin Password] |
| Expected Result | Admin is logged in and redirected to `/Admin-Dashboard`. |
| Actual Result |  Admin is logged in adn redirected to `/Admin-Dashboard`|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-002 |
| Test Title | Admin Login - Incorrect Password |
| Preconditions | Admin login page is loaded. |
| Test Steps | 1. Navigate to `/admin`.<br>2. Enter incorrect password.<br>3. Click "Sign In". |
| Test Data | Password: "wrongpassword" |
| Expected Result | Error message is shown: "Incorrect password or login issue." Admin is not logged in. |
| Actual Result |  Error message is shown: "Incorrect password or login issue" Admin is not logged in. |
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-003 |
| Test Title | Admin Login - Empty Password Field |
| Preconditions | Admin login page is loaded. |
| Test Steps | 1. Navigate to `/admin`.<br>2. Leave password field empty.<br>3. Click "Sign In". |
| Test Data | Password: "" (empty) |
| Expected Result | Alert is shown: "Please enter your password". Admin is not logged in. |
| Actual Result |  Alert is shown: "Please enter your password". Admin is not logged in.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-004 |
| Test Title | Admin Login - Forgot Password Functionality |
| Preconditions | Admin login page is loaded. |
| Test Steps | 1. Navigate to `/admin`.<br>2. Click "Forgot Password?" link.<br>3. Observe the result. |
| Test Data | N/A |
| Expected Result | Password reset email is sent to the admin email. Success alert is shown. |
| Actual Result |  Password reset email is sent to the admin email. Success alert is shown. |
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-005 |
| Test Title | Admin Login - Loading State |
| Preconditions | Admin login page is loaded. |
| Test Steps | 1. Enter password.<br>2. Click "Sign In".<br>3. Observe the button and input fields during authentication. |
| Test Data | Any password |
| Expected Result | "Signing in..." is shown on the button. Inputs and buttons are disabled during loading. |
| Actual Result |  "Signing in..." is shown on the button. Inputs and buttons are disabled during loading. |
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-006 |
| Test Title | Admin Login - Back to Website Button |
| Preconditions | Admin login page is loaded. |
| Test Steps | 1. Click "Back to Website" button. |
| Test Data | N/A |
| Expected Result | User is redirected to the main website home page (`/`). |
| Actual Result |  User is redirected to the main website home page (`/`).|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-007 |
| Test Title | Admin Login - Access Admin Dashboard Without Login (Protected Route) |
| Preconditions | User is not logged in as admin. |
| Test Steps | 1. Open browser.<br>2. Directly enter `/Admin-Dashboard` in the URL.<br>3. Press Enter. |
| Test Data | N/A |
| Expected Result | User is redirected to `/admin` login page. Admin dashboard is not accessible. |
| Actual Result |  User is redirected to `/admin` login page. Admin dashboard is not accessible.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-008 |
| Test Title | Admin Login - Already Logged In User |
| Preconditions | User is already logged in as admin. |
| Test Steps | 1. Navigate to `/admin`.<br>2. Observe behavior. |
| Test Data | N/A |
| Expected Result | User is redirected to `/Admin-Dashboard` or shown a message indicating already logged in. |
| Actual Result |  User is shown the login Page Again and the can fill the password again|
| Status |  Failed|
| Remarks |  Need to implement checking the login state|

## Admin Dashboard Home Page Test Cases

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-001 |
| Test Title | Dashboard Loads Successfully |
| Preconditions | Admin is logged in and navigates to `/Admin-Dashboard` |
| Test Steps | 1. Log in as admin.<br>2. Navigate to `/Admin-Dashboard`. |
| Test Data | N/A |
| Expected Result | Dashboard loads with welcome message, sections for Projects, Messages, Clients, and Password Change. |
| Actual Result |  Dashboard loads with welcome message, sections for Projects, Messages, Clients, and Password Change.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-002 |
| Test Title | Dashboard UI Elements Present |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Verify presence of:<br>- AdminHeader<br>- Welcome message<br>- Change Password section<br>- Projects section<br>- Messages section<br>- Clients section |
| Test Data | N/A |
| Expected Result | All UI elements are present and visible. |
| Actual Result |  ll UI elements are present and visible.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-003 |
| Test Title | Change Password - Successful Change |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Enter correct current password.<br>2. Enter new password (min 6 chars).<br>3. Confirm new password.<br>4. Click "Update Password". |
| Test Data | Current password: [valid]<br>New password: "newpass123"<br>Confirm: "newpass123" |
| Expected Result | Password is updated, success message shown, fields cleared. |
| Actual Result |  Password is updated, success message shown, fields cleared.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-004 |
| Test Title | Change Password - Incorrect Current Password |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Enter incorrect current password.<br>2. Enter new password.<br>3. Confirm new password.<br>4. Click "Update Password". |
| Test Data | Current password: "wrongpass"<br>New password: "newpass123"<br>Confirm: "newpass123" |
| Expected Result | Error message shown, password not updated. |
| Actual Result |  Error message shown, password not updated.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-005 |
| Test Title | Change Password - Mismatched New Passwords |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Enter correct current password.<br>2. Enter new password.<br>3. Enter different value in confirm password.<br>4. Click "Update Password". |
| Test Data | Current password: [valid]<br>New password: "newpass123"<br>Confirm: "differentpass" |
| Expected Result | Error message: "New passwords do not match". Password not updated. |
| Actual Result |  Error message: "New passwords do not match". Password not updated.|
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-006 |
| Test Title | Change Password - New Password Too Short |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Enter correct current password.<br>2. Enter new password less than 6 chars.<br>3. Confirm new password.<br>4. Click "Update Password". |
| Test Data | Current password: [valid]<br>New password: "123"<br>Confirm: "123" |
| Expected Result | Error message: "Password must be at least 6 characters long". Password not updated. |
| Actual Result |  Error message: "Password must be at least 6 characters long". Password not updated. |
| Status |  Passed|
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-007 |
| Test Title | Change Password - Empty Fields |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Leave one or more fields empty.<br>2. Click "Update Password". |
| Test Data | Any combination of empty fields |
| Expected Result | Required field validation triggers, error message shown. |
| Actual Result | Required field validation triggers, error message shown. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-008 |
| Test Title | Projects Section - View All Button |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Click "View All" in Projects section. |
| Test Data | N/A |
| Expected Result | Navigates to `/AdminProjects` page. |
| Actual Result | Navigates to `/AdminProjects` page. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-009 |
| Test Title | Projects Section - Project List Preview |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Observe Projects section.<br>2. Verify up to 4 projects are shown.<br>3. Click a project. |
| Test Data | N/A |
| Expected Result | Up to 4 projects are shown. Clicking a project navigates to its update page. |
| Actual Result | Up to 4 projects are shown. Clicking a project navigates to its update page. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-010 |
| Test Title | Messages Section - View All Button |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Click "View All" in Messages section. |
| Test Data | N/A |
| Expected Result | Navigates to `/AdminMessages` page. |
| Actual Result |  Navigates to `/AdminMessages` page.  |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-011 |
| Test Title | Messages Section - Message List Preview |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Observe Messages section.<br>2. Verify up to 6 messages are shown. |
| Test Data | N/A |
| Expected Result | Up to 6 messages are shown. |
| Actual Result |  Up to 6 messages are shown.  |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-012 |
| Test Title | Clients Section - View All Button |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Click "View All" in Clients section. |
| Test Data | N/A |
| Expected Result | Navigates to `/AdminClients` page. |
| Actual Result |  Navigates to `/AdminClients` page.  |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-013 |
| Test Title | Clients Section - Client List Preview |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Observe Clients section.<br>2. Verify up to 6 clients are shown. |
| Test Data | N/A |
| Expected Result | Up to 6 clients are shown. |
| Actual Result |  Up to 6 clients are shown.  |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-014 |
| Test Title | Dashboard - Sign Out Functionality |
| Preconditions | Admin is logged in and on dashboard |
| Test Steps | 1. Click "Sign Out" in AdminHeader. |
| Test Data | N/A |
| Expected Result | Admin is signed out and redirected to `/admin` login page. |
| Actual Result |  Admin is signed out and redirected to `/admin` login page.  |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-015 |
| Test Title | Dashboard - Protected Route (Not Logged In) |
| Preconditions | User is not logged in as admin. |
| Test Steps | 1. Open `/Admin-Dashboard` directly in browser. |
| Test Data | N/A |
| Expected Result | User is redirected to `/admin` login page. |
| Actual Result |  User is redirected to `/admin` login page.  |
| Status | Password |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-DASH-016 |
| Test Title | Dashboard - Loading State |
| Preconditions | Admin is logging in or dashboard is fetching data |
| Test Steps | 1. Log in as admin.<br>2. Observe dashboard during loading. |
| Test Data | N/A |
| Expected Result | Loading indicator is shown until data is ready. |
| Actual Result |  Loading indicator is shown until data is ready.  |
| Status | Passed |
| Remarks |  |

## Admin Projects Page Test Cases

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-001 |
| Test Title | Projects Page Loads Successfully |
| Preconditions | Admin is logged in and navigates to `/AdminProjects` |
| Test Steps | 1. Log in as admin.<br>2. Navigate to `/AdminProjects`. |
| Test Data | N/A |
| Expected Result | Projects page loads with a list of all projects and an option to add a new project. |
| Actual Result | Projects page loads with a list of all projects and an option to add a new project. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-002 |
| Test Title | Project List Display |
| Preconditions | Admin is on `/AdminProjects` |
| Test Steps | 1. Observe the list of projects.<br>2. Verify each project displays title, location, and type. |
| Test Data | Projects in database |
| Expected Result | Each project is displayed with correct title, location, and type. |
| Actual Result | Each project is displayed with correct title, location, and type. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-003 |
| Test Title | Click Project to Update |
| Preconditions | Admin is on `/AdminProjects` |
| Test Steps | 1. Click on a project in the list. |
| Test Data | Any project |
| Expected Result | Navigates to the update page for the selected project. |
| Actual Result | Navigates to the update page for the selected project. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-004 |
| Test Title | Add New Project - Successful Submission |
| Preconditions | Admin is on `/AdminProjects` |
| Test Steps | 1. Click "Add Project".<br>2. Fill in all required fields.<br>3. Submit the form. |
| Test Data | Valid project data |
| Expected Result | New project is added and appears in the project list. |
| Actual Result | New project is added and appears in the project list. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-005 |
| Test Title | Add New Project - Incomplete Submission |
| Preconditions | Admin is on `/AdminProjects` |
| Test Steps | 1. Click "Add Project".<br>2. Leave one or more required fields empty.<br>3. Submit the form. |
| Test Data | Incomplete project data |
| Expected Result | Error message is shown, project is not added. |
| Actual Result | Error message is shown, project is not added. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-006 |
| Test Title | Update Project - Successful Update |
| Preconditions | Admin is on project update page |
| Test Steps | 1. Edit project details.<br>2. Submit the form. |
| Test Data | Valid updated project data |
| Expected Result | Project details are updated and reflected in the project list. |
| Actual Result | Project details are updated and reflected in the project list. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-007 |
| Test Title | Update Project - Incomplete Submission |
| Preconditions | Admin is on project update page |
| Test Steps | 1. Remove required field value.<br>2. Submit the form. |
| Test Data | Incomplete project data |
| Expected Result | Error message is shown, project is not updated. |
| Actual Result | Error message is shown, project is not updated. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-008 |
| Test Title | Delete Project - Confirmation Dialog |
| Preconditions | Admin is on project update page |
| Test Steps | 1. Click "Delete Project".<br>2. Observe confirmation dialog. |
| Test Data | Any project |
| Expected Result | Confirmation dialog appears before deletion. |
| Actual Result | Confirmation dialog appears before deletion. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-009 |
| Test Title | Delete Project - Successful Deletion |
| Preconditions | Admin is on project update page |
| Test Steps | 1. Click "Delete Project".<br>2. Confirm deletion. |
| Test Data | Any project |
| Expected Result | Project is deleted and removed from the project list. |
| Actual Result | Project is deleted and removed from the project list. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-010 |
| Test Title | Delete Project - Cancel Deletion |
| Preconditions | Admin is on project update page |
| Test Steps | 1. Click "Delete Project".<br>2. Cancel the confirmation dialog. |
| Test Data | Any project |
| Expected Result | Project is not deleted, remains in the project list. |
| Actual Result | Project is not deleted, remains in the project list. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-011 |
| Test Title | Add Project - Image Upload |
| Preconditions | Admin is on add project form |
| Test Steps | 1. Fill in project details.<br>2. Upload one or more images.<br>3. Submit the form. |
| Test Data | Valid project data with images |
| Expected Result | Images are uploaded and associated with the new project. |
| Actual Result | Images are uploaded and associated with the new project. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-012 |
| Test Title | Update Project - Image Upload/Remove |
| Preconditions | Admin is on project update page |
| Test Steps | 1. Add or remove images.<br>2. Submit the form. |
| Test Data | Valid image data |
| Expected Result | Images are updated for the project. |
| Actual Result | Images are updated for the project. |
| Status | Passed |
| Remarks |  |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-ADMIN-PROJ-013 |
| Test Title | Project List - No Projects State |
| Preconditions | No projects exist in the database |
| Test Steps | 1. Navigate to `/AdminProjects`. |
| Test Data | No projects |
| Expected Result | Message is shown indicating no projects are available. |
| Actual Result | Message is shown indicating no projects are available. |
| Status | Passed |
| Remarks |  |

## Admin Messages Page Test Cases

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AM-001 |
| Test Title | Display All Messages |
| Preconditions | Admin is logged in and navigates to Admin Messages page |
| Test Steps | 1. Navigate to Admin Messages page<br>2. Observe the list of messages |
| Test Data | Messages in the database |
| Expected Result | All messages from the database should be displayed in a list |
| Actual Result | All messages from the database should be displayed in a list |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AM-002 |
| Test Title | Message Card Displays Correct Info |
| Preconditions | Admin is on Admin Messages page |
| Test Steps | 1. Observe each message card<br>2. Check that first name, last name, location, budget, and read status are shown |
| Test Data | Messages with various data |
| Expected Result | Each message card displays correct first name, last name, location, budget, and read/unread status |
| Actual Result | Each message card displays correct first name, last name, location, budget, and read/unread status |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AM-003 |
| Test Title | Click Message Card Navigates to Details |
| Preconditions | Admin is on Admin Messages page |
| Test Steps | 1. Click on a message card |
| Test Data | Any message card |
| Expected Result | Admin is navigated to the message details page for the selected message |
| Actual Result | Admin is navigated to the message details page for the selected message |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AM-004 |
| Test Title | Delete Message Functionality |
| Preconditions | Admin is on Admin Messages page with at least one message |
| Test Steps | 1. Click the delete (trash) icon on a message card<br>2. Confirm the deletion in the dialog<br>3. Observe the message is removed from the list |
| Test Data | Any message card |
| Expected Result | Message is deleted from the database and removed from the list |
| Actual Result | Message is deleted from the database and removed from the list |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AM-005 |
| Test Title | Delete Confirmation Dialog |
| Preconditions | Admin is on Admin Messages page |
| Test Steps | 1. Click the delete (trash) icon on a message card<br>2. Observe the confirmation dialog<br>3. Click 'Cancel' |
| Test Data | Any message card |
| Expected Result | Message is not deleted if deletion is cancelled |
| Actual Result |  Message is not deleted if deletion is cancelled |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AM-006 |
| Test Title | Read/Unread Status Indicator |
| Preconditions | Admin is on Admin Messages page |
| Test Steps | 1. Observe the status indicator on each message card |
| Test Data | Messages with both read and unread status |
| Expected Result | Unread messages show a green dot, read messages show a white dot |
| Actual Result | Unread messages show a green dot, read messages show a white dot |
| Status | Passed |
| Remarks | |

## Admin Clients Page Test Cases

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-001 |
| Test Title | Display All Clients |
| Preconditions | Admin is logged in and navigates to Admin Clients page |
| Test Steps | 1. Navigate to Admin Clients page<br>2. Observe the list of clients |
| Test Data | Clients in the database |
| Expected Result | All clients from the database should be displayed in a list |
| Actual Result | All clients from the database should be displayed in a list |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-002 |
| Test Title | Client Card Displays Correct Info |
| Preconditions | Admin is on Admin Clients page |
| Test Steps | 1. Observe each client card<br>2. Check that first name, last name, location, email, and phone are shown |
| Test Data | Clients with various data |
| Expected Result | Each client card displays correct first name, last name, location, email, and phone |
| Actual Result | Each client card displays correct first name, last name, location, email, and phone |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-003 |
| Test Title | Add New Client - Successful Submission |
| Preconditions | Admin is on Admin Clients page |
| Test Steps | 1. Fill in all required fields in the add client form<br>2. Click 'Add Client' button |
| Test Data | Valid client data |
| Expected Result | New client is added to the database and appears in the client list |
| Actual Result | New client is added to the database and appears in the client list |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-004 |
| Test Title | Add New Client - Incomplete Submission |
| Preconditions | Admin is on Admin Clients page |
| Test Steps | 1. Leave one or more required fields empty in the add client form<br>2. Click 'Add Client' button |
| Test Data | Incomplete client data |
| Expected Result | Error message is shown, client is not added |
| Actual Result | Error message is shown, client is not added |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-005 |
| Test Title | Delete Client Functionality |
| Preconditions | Admin is on Admin Clients page with at least one client |
| Test Steps | 1. Click the delete (trash) icon on a client card<br>2. Confirm the deletion in the dialog<br>3. Observe the client is removed from the list |
| Test Data | Any client card |
| Expected Result | Client is deleted from the database and removed from the list |
| Actual Result | Client is deleted from the database and removed from the list |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-006 |
| Test Title | Delete Confirmation Dialog |
| Preconditions | Admin is on Admin Clients page |
| Test Steps | 1. Click the delete (trash) icon on a client card<br>2. Observe the confirmation dialog<br>3. Click 'Cancel' |
| Test Data | Any client card |
| Expected Result | Client is not deleted if deletion is cancelled |
| Actual Result | Client is not deleted if deletion is cancelled |
| Status | Passed |
| Remarks | |

| Field | Description |
|-------|-------------|
| Test Case ID | TC-AC-007 |
| Test Title | Add Client Form UI Display |
| Preconditions | Admin is on Admin Clients page |
| Test Steps | 1. Observe the add client form at the top of the page |
| Test Data | N/A |
| Expected Result | Add client form is visible, styled as a card, and all input fields and button are present |
| Actual Result | Add client form is visible, styled as a card, and all input fields and button are present |
| Status | Passed |
| Remarks | |

## Summary of Test Results

| Section         | Tests Passed | Tests Failed | Not Implemented | Total Tests |
|----------------|-------------|-------------|-----------------|-------------|
| Public Website | 15          | 0           | 1               | 16          |
| Admin Portal   | 7           | 1           | 0               | 8           |
| Admin Dashboard| 16          | 0           | 0               | 16          |
| Admin Projects | 13          | 0           | 0               | 13          |
| Admin Messages | 6           | 0           | 0               | 6           |
| Admin Clients  | 7           | 0           | 0               | 7           |
| **TOTAL**      | **64**      | **1**       | **1**           | **66**      |
