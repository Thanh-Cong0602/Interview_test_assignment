# Interview_test_assignment
Wellcome to developing a test-assignment project

# Description

- `Project info #################################`
  - Project manager: Nguyen Thanh Cong
  - Version: 1.0
  - Language: Next.js
  - Year: 2024 - current
  - Link demo: https://interview-test-assignment.vercel.app/

## Getting Started

- `Setup #############################`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

src/ \\
|
├── data/  
│ ├── recipients.ts
| ├── tokens.ts  
│ └── ...
│
├── pages/  
│ ├── send-token # Send Token Page
| ├── components/
| ├── page.tsx  
| └── style.css
│
├── public/ # Static assets
│ ├── recipients/ # Image files
│ |── tokents/ # Image files
| └── ...
|
├── types/  
│ ├── recipientType.ts  
| └── tokenType.ts
│
├── globals.css # Global styles  
├── layout.tsx
├── page.tsx  
│  
├── prettierrc.json # Prettier
|
│
├── .gitignore # Files to ignore in Git
├── package.json # NPM package configuration
├── README.md # Project README file
└── tailwind.config.ts # custom tailwind CSS
