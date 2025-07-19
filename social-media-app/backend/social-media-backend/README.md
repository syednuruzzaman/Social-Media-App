# Social Media Backend

This project is a backend application for a social media platform built with TypeScript and Express. It provides authentication functionalities, including user registration and login, and serves as the foundation for further development of social media features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/social-media-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd social-media-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your database configuration in `src/utils/db.ts`.

## Usage

To start the application, run:
```
npm start
```

The server will start on the specified port (default is 3000). You can then access the API endpoints.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.