# TopperAI — AGENTS.md

You are an expert React Native + Expo engineer helping build a production-quality AI-powered education platform.

You write clean, scalable, maintainable code.

You prioritize:

- simplicity
- performance
- readability
- scalability
- production-quality architecture

This project is both:

1. A real-world startup-grade product
2. A learning project for developers

Always build features in a way that is easy to understand and easy to extend.

---

# Project Overview

We are building TopperAI, an AI-powered learning ecosystem using Expo and React Native.

TopperAI helps students:

- learn faster
- create notes instantly
- generate quizzes
- practice exams
- compete with friends
- track progress
- improve weak subjects
- receive personalized AI guidance

The goal is to create a complete AI study companion for school, college, and competitive exam students.

The app should feel modern, premium, fast, and highly engaging.

---

# Core Features

## 1. Authentication

Users can:

- Sign Up
- Login
- Forgot Password
- Google Login
- Email Verification
- Profile Creation

Required User Fields:

- Name
- Unique User ID
- Email
- Class
- School (optional)

The User ID should be searchable so students can send quiz battle requests.

---

## 2. AI Learning Assistant

Students can ask questions using:

- text
- image
- PDF
- voice

AI should:

- explain concepts
- solve doubts
- simplify topics
- generate examples
- provide study guidance

Responses should be beginner-friendly.

---

## 3. AI Notes Generator

Students can generate notes from:

- text
- images
- PDFs
- topics

Output options:

- Short Notes
- Detailed Notes
- Revision Notes
- Exam Notes
- Bullet Notes

Students can save notes locally and in cloud storage.

---

## 4. AI Quiz Generator

Students can generate quizzes from:

- notes
- PDFs
- images
- topics

Quiz Types:

- MCQ
- True False
- Fill in the Blanks
- Subjective Questions

Difficulty Levels:

- Easy
- Medium
- Hard

---

## 5. Quiz Battle

Students can challenge friends using:

- User ID
- Friend Requests

Features:

- Real-time quiz battles
- Live scoring
- Leaderboards
- Battle history
- XP rewards

Battle results should update instantly.

---

## 6. AI Mock Tests

Students can:

- generate mock exams
- practice previous papers
- attempt timed tests

Features:

- Timer
- Auto Evaluation
- Detailed Analysis
- Rank Prediction
- Weak Topic Detection

---

## 7. AI Study Planner

Students can create:

- daily plans
- weekly plans
- monthly plans

AI should generate schedules based on:

- class
- exam date
- study hours
- weak subjects

---

## 8. Community

Students can:

- create posts
- share notes
- ask doubts
- comment
- react to content

The community should be educational and moderated.

---

## 9. Gamification

Reward students with:

- XP
- Coins
- Streaks
- Badges
- Achievements
- Levels

The app should feel motivating and engaging.

---

## 10. Analytics Dashboard

Students should see:

- study time
- subject performance
- quiz accuracy
- streak history
- completed notes
- completed quizzes

Analytics must be simple and visual.

---

## 11. Subscription System

Plans:

### Free

- Limited AI usage
- Limited quizzes
- Basic notes

### Pro

- Unlimited AI
- Unlimited notes
- Unlimited quizzes
- Premium features

### Premium

- All Pro features
- Advanced analytics
- AI study planner
- Priority access

---

# Tech Stack

Use the following stack:

- Expo
- React Native
- TypeScript
- Expo Router
- NativeWind
- Zustand
- AsyncStorage
- Firebase
- Clerk Authentication
- Gemini API
- OpenAI API (optional)
- Supabase (optional)
- RevenueCat
- React Query

Do not introduce new major libraries without approval.

---

# Development Philosophy

Build feature by feature.

For every feature:

1. Understand the requirement.
2. Check this file before coding.
3. Build MVP first.
4. Avoid overengineering.
5. Prefer readable code.
6. Use scalable architecture.
7. Refactor only when necessary.
8. Focus on user experience.

---

# Architecture Guidelines

Use this structure:

src/

app/
components/
features/
services/
store/
hooks/
constants/
utils/
types/
assets/
providers/
lib/

---

# State Management

Use Zustand for:

- authentication
- user profile
- notes
- quizzes
- battles
- subscriptions
- analytics

Keep stores modular.

Avoid giant stores.

---

# Backend Rules

Never expose:

- API Keys
- Firebase Admin Keys
- AI Secrets
- Payment Secrets

Use:

- Firebase Functions
- Supabase Edge Functions
- Secure API Routes

All sensitive operations must happen server-side.

---

# AI Rules

AI modules should be separated into:

services/ai/

Examples:

- notesGenerator.ts
- quizGenerator.ts
- plannerGenerator.ts
- doubtSolver.ts

AI services should be reusable and modular.

---

# UI Guidelines

Design inspiration:

- Duolingo
- Notion
- Khan Academy
- Coursera
- ChatGPT
- Discord

UI Goals:

- premium
- clean
- modern
- fast
- mobile-first

Use:

- rounded corners
- smooth animations
- clear typography
- beautiful gradients

Avoid clutter.

---

# Code Style

Always:

- Use TypeScript
- Use Functional Components
- Use Custom Hooks when needed
- Use reusable UI components
- Use descriptive names

Prefer:

- clean code
- modular code
- beginner-friendly structure

Avoid:

- deeply nested logic
- magic values
- unnecessary abstraction

---

# Performance Guidelines

Optimize only when needed.

Prefer:

- lazy loading
- caching
- memoization
- pagination
- optimized images

Avoid premature optimization.

---

# Security Rules

Never:

- expose secrets
- trust client validation
- store passwords

Always:

- validate server-side
- sanitize user input
- secure API requests

---

# Testing Guidelines

Test:

- authentication
- AI generation
- notes
- quizzes
- battles
- subscriptions

Every major feature should be tested before release.

---

# Example Development Order

Phase 1

1. Expo Setup
2. Navigation
3. UI System
4. Authentication

Phase 2

5. AI Chat
6. Notes Generator
7. Quiz Generator

Phase 3

8. Quiz Battle
9. Community
10. Analytics

Phase 4

11. Subscription
12. Gamification
13. Admin Panel

Phase 5

14. Optimization
15. Security
16. Deployment

Build vertically feature by feature.

---

# Final Philosophy

Build like a startup.

The app should feel:

- premium
- intelligent
- scalable
- production-ready
- educational

Every feature should help students learn better while keeping the codebase clean, maintainable, and easy to understand.

ye mera topper ai app ka agent.md file hai usake anusar mujhe step by strp promot do