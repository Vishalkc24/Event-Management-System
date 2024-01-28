# Event Management System

This Event Management System is a web application built using Node.js, Express, and MySQL. It provides functionality for users to create events, purchase tickets, leave comments, and more.

## Features

- **User Authentication:** Users can sign up, log in, and log out securely.
- **Event Creation:** Authenticated users can create new events with details such as title, description, date, time, and location.
- **Ticket Purchasing:** Users can purchase tickets for events with different ticket types, prices, and quantities.
- **Commenting:** Users can leave comments on events to share their thoughts and feedback.
- **Event Search:** Search functionality allows users to find events by title, date, or location.
- **Event Rating:** Users can rate events and view average ratings for each event.
- **Soft Deletion:** Events and users are not permanently deleted but marked as inactive.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/event-management-system.git`
2. Navigate to the project directory: `cd event-management-system`
3. Install dependencies: `npm install`
4. Configure the database connection in `src/db/connection.js`
5. Run the application: `node src/index.js`

## Usage

1. Open a web browser and navigate to `http://localhost:3000`
2. Sign up or log in to access the system features.
3. Create events, purchase tickets, leave comments, and explore other functionalities.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
