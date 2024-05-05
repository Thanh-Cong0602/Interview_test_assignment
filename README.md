# Interview_test_assignment

Wellcome to developing a test-assignment project

# Description

- `Project info #################################`
  - Project manager: Nguyen Thanh Cong
  - Version: 1.0
  - Language: Next.js
  - Year: 2024 - current
  - Link demo: https://interview-test-assignment.vercel.app/

# Setup

## Dependencies
- `## Getting Started with Create Next App ##`

This project was bootstrapped with
[Create Next App](https://nextjs.org/docs/pages/api-reference/create-next-app).

- `## Getting Started with TailwindCSS ##`

This project was styled with
[TailwindCSS](https://tailwindcss.com/docs/guides/nextjs).

## Configuration files

- `File pretiierrc.json #############`

  - Prettier files are used to format code according to a certain standard for consistency between developers.

- `File tailwind.config.ts ##############`

  - This file is used to customize Tailwind's available CSS properties to be suitable and convenient to use with the application's design requirements.

- `File tsconfig.json #############`
  - This is where I can configure TypeScript for my project.


## Commands for running and testing

- `Run the development server: #############`

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

# Project Structure:

- My project structure includes folders such as data, public, type, and pages.

- `Folder data ###################`

  - The data directory contains mock data for the application when there are no corresponding APIs.
  - In the data folder, there will be two files: recipients.ts file corresponding to recipient information and tokens.ts file corresponding to token information.

- `Folder public ###################`

  - The public folder contains images related to the application, and these images are svg files taken from Figma.

- `Folder types ###################`

  - The type routine will contain the type formats for the file data in the directory data because I use typescript for the application.

- `Folder pages ###################`

  - The page folder will contain the application's interfaces, and here I have a folder called the send-token interface.
  - In the send-token folder, I created a components folder to code the drop-down interface of the recipient and the token. The reason for this folder is partly that I want the code to be cleaner and easier to manage if there is an update in the future. And because these files are only used for the send-token page, I created a child component in the send-token folder without creating a file in the common component of the entire application.
  - Beside the component folder, I created a style.css file to custom scrollbar for drop-down interface of the recipient.


# Implementation Decisions:

- I chose next.js because I have experience working with this language and this choice will help me save time doing tests.
- I chose Tailwind CSS because it is a quick and convenient CSS code library for developers. Besides, Tailwind CSS has a large and enthusiastic community, so if you have problems or need help, you can easily find answers or support from this community.

# Completion Time:

- It took me about 10 hours to complete all the projects. That's my estimate, so there could be a difference of about 30 minutes.
