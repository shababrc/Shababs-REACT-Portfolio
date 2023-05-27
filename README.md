# Shababs-REACT-Portfolio
Being a web developer means being part of a community. You’ll need a place such as a portfolio to share your projects not only if you're applying for jobs or working as a freelancer but also so that you can share your work with fellow developers and collaborate on future.

## User Story

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

## Acceptance Criteria

GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

## How We Did This:
For the React portfolio, we implemented the following components and functionality to meet the given requirements:

App Component: The main component that serves as the entry point of the portfolio application. It includes the header, content section, and footer components.
Header Component: Displays the developer's name and navigation with titles corresponding to different sections of the portfolio. It highlights the current section title based on user interaction.
Content Component: Renders the content based on the selected section title. It dynamically displays the corresponding section component (About Me, Portfolio, Contact, or Resume) based on user navigation.
About Me Component: Displays a recent photo or avatar of the developer and provides a short bio about them.
Portfolio Component: Shows titled images of six applications developed by the developer. Each application has links to both the deployed application and its corresponding GitHub repository.
Contact Component: Renders a contact form with fields for name, email address, and message. It validates the form inputs and displays error messages if required fields are not filled or if an invalid email address is entered.
Resume Component: Provides a link to download the developer's resume and lists their proficiencies.
Footer Component: Displays text or icon links to the developer's GitHub and LinkedIn profiles, as well as their profile on a third platform (Stack Overflow, Twitter).
By structuring the components and implementing the necessary logic, we create a single-page React portfolio application that fulfills the user story and acceptance criteria. The components are interconnected and dynamically render content based on user navigation, providing an intuitive and interactive user experience.

## Link to GitHub Repository:
https://github.com/shababrc/Shababs-REACT-Portfolio

## Link to the deployed site:
https://shababrc.github.io/Shababs-REACT-Portfolio/

## Credits:
Credits to Bryan Swarthout for his amazing teaching and for giving us a great preparation for this homework. Credits to Shawn Tschoepe as well for his help. Special thanks to tutor Jacob Carver for helping me get this to work.

## License:
MIT License 