# 🏥 HiPatient - Healthcare Management System

**HiPatient** is a modern, responsive healthcare management platform designed for physiotherapy and medical practices. Built with cutting-edge web technologies, it provides an intuitive interface for patient registration, appointment scheduling, and healthcare administration.

## Project Overview

HiPatient is a **physiotherapy care management system** that streamlines the patient onboarding process and healthcare administration. The application features a clean, modern UI with dark theme support and is designed to enhance the patient experience from initial registration to appointment scheduling.

### Key Features

- **Patient Registration**: Streamlined patient onboarding with form validation
- **Appointment Scheduling**: Book and manage appointments efficiently
- **Admin Panel**: Healthcare provider administration interface
- **Dark/Light Theme**: Customizable theme preferences
- **Responsive Design**: Mobile-first design for all devices
- **Form Validation**: Robust client-side validation with Zod
- **International Phone Support**: Global phone number formatting
- **Accessibility**: WCAG compliant with proper ARIA labels

## Tech Stack

### Frontend Framework

- **[Next.js 15.1.7](https://nextjs.org/)** - React framework with App Router
- **[React 19.0.0](https://reactjs.org/)** - Latest React with concurrent features
- **[TypeScript 5.7.3](https://www.typescriptlang.org/)** - Type-safe development

## Architecture Overview

### Frontend Architecture

```
HiPatient/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Homepage with patient form
│   └── globals.css       # Global styles and CSS variables
├── components/            # Reusable React components
│   ├── forms/            # Form components
│   │   └── PatientForm.tsx
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── form.tsx
│       ├── input.tsx
│       └── CustomFormField.tsx
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
    └── assets/          # Images and icons
```

### Component Structure

- **PatientForm**: Main registration form with validation
- **CustomFormField**: Reusable form field component supporting various input types
- **UI Components**: shadcn/ui based design system components
- **Theme Provider**: Dark/light mode theme management
