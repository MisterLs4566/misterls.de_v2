# misterls.de_v2

Welcome to the repository for misterls.de v2!

## Introduction

I've always wanted to create my own website to have a publicly accessible place where I can showcase my projects and improve my web development skills. My previous website was created in 2021/2022 when I was a beginner in programming, using PHP, HTML, JavaScript, and CSS.

This repository has been created to work on a new version (v2) of my website and to share the code with anyone who is interested.

## Goals

The goal of this project is to develop a full-stack web application using Node.js and React. This approach will allow me to enhance my skills in modern web development and create a more dynamic and interactive website.

## Technologies

- **Frontend**: React 18.2.0
- **Backend**: Node.js v23.5.0
- **Styling**: CSS / Tailwind CSS
- **Database**: MySQL 8.4.0

## Features

- Showcase of personal projects
- Improved user interface and user experience
- Responsive design for mobile and desktop
- Interactive elements powered by React

## Getting Started

To get started with the project, clone the repository, configure your local MySQL database, and install the necessary dependencies. Follow the steps below:

### Set up your local database

1. Install XAMPP or a similar tool.
2. Create and configure your MySQL database as needed. The tables shown in the mockup RM ([wiki](https://github.com/MisterLs4566/misterls.de_v2/wiki/Database-Mockups)) will be created automatically when the server is running.
3. Create a new file: '.env' and save it in the root folder of the project. Fill in the following values to enable the communication between the web app and the local database:
```plaintext
DB_HOST=[your_host_name]
DB_USER=[your_user_name]
DB_PASSWORD=[your_password]
DB_NAME=[your_db_name]
```


### Clone the repository and install dependencies

```bash
git clone https://github.com/yourusername/misterls.de_v2.git
cd misterls.de_v2
npm install
```

### Run the server locally

```bash
cd server
npm run dev
```

### Open the web app

1. The server runs on the port specified in the console (default is port 3000).
2. Open your browser.
3. Enter the following URL:

```plaintext
localhost:[port]
```

### Install extensions (optional)

I used the following VS Code extensions, which I recommend:

1. ESLint and Prettier (for better code quality and readability)
2. Markdown Preview Enhanced (for previewing Markdown files)
3. Catppuccin for VS Code (Mocha color theme)

## Tools I Used

I utilized the following tools for documentation and project implementation:

- Visual Studio Code (preferred IDE)
- draw.io (for mockups)

## Contributing

If you're interested in contributing to this project, feel free to fork the repository and submit a pull request. Feedback and suggestions are always welcome!

## Contact

For any questions or inquiries, please contact me at lkronenb1@gmail.com.