# EduFund
A mututal funds POC app for an internship application

Has 4 screens Login, Signup, Listings and Details Screen.

On App Load, the Signup page is loaded where the user needs to enter details to create an account/user after which he/she is automatically redirected to the Login Screen.

He then needs to enter the correct username and password to login into the app.

On successful authentication, the user is shown the Listings screen where a list of 5 mutual funds are shown in the form of Cards.

Each card contains the image, name of the fund, and fund ID. The listing screens also have a search bar implementation.

On click of any card, the details Screen for the selected Fund is opened where some metadata along with a couple of graphs is listed. ( graphs are made using react-native-chart-kit library)
