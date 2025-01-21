# EasyTask

**EasyTask** is an enterprise-level task management application built with Angular. This project demonstrates the use of **Routing** to create a multi-page single-page application (SPA) with dynamic navigation and robust task management capabilities.

## Features

### Task Management

- View and manage tasks assigned to specific users.
- Add new tasks with a title, description, and due date.
- Update task status (e.g., Mark as complete).
- Sort tasks by creation date.

### Multi-Page SPA with Angular Routing

- **Dynamic Routing**:
  - Navigate between users and their respective task lists dynamically.
  - Extract and use route parameters for displaying specific data.
- **Nested Routes**:
  - Use nested routes for managing task details within user profiles.
- **Error Handling**:
  - Redirect users to a **Not Found** page for invalid routes.
- **Query Parameters**:
  - Dynamically filter and sort tasks using query parameters.
- **Route Guards**:
  - Secure routes with `CanActivate` and `CanDeactivate` guards to ensure smooth navigation and data integrity.

## Project Highlights

This project was developed while exploring **Section 14: Routing & Building Multi-page Single Page Applications** in Angular, focusing on:

- Setting up and registering multiple routes.
- Styling active navigation links.
- Using dynamic route parameters via `@Input()` and Observables.
- Handling nested and parent-child route relationships.
- Adding static and dynamic data to routes with resolvers.
- Programmatic navigation using the Angular Router.
- Managing query parameters for sorting and filtering data.
- Implementing route guards for enhanced security and user experience.
