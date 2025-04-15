# InvestMentor

An AI-powered investment education assistant that provides personalized learning experiences for users of all experience levels.

## Project Description

InvestMentor is an interactive platform designed to help users understand investment concepts through personalized AI-guided conversations. The application adapts its explanations based on the user's experience level and preferred learning style, making complex financial concepts more accessible to everyone.

Whether you're a complete beginner looking for simple explanations or an experienced investor wanting detailed terminology, InvestMentor tailors its responses to match your needs and learning preferences.

## Features

- **Personalized Learning**: Customize your experience based on:
  - Experience level (beginner, some knowledge, experienced)
  - Learning style preference (simple, visual, scenario-based, terminology)

- **Adaptive AI Responses**: Receive investment education tailored to your specific preferences

- **Dynamic Preference Updates**: Change your learning preferences at any time during your session

- **Interactive Chat Interface**: Ask questions and receive informative responses about investment topics

## Technology Stack

- Next.js 14
- TypeScript
- OpenAI API
- Tailwind CSS
- Vercel AI SDK

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/investmentor.git
   cd investmentor
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Select your investment experience level and preferred learning style in the sidebar
2. Type your investment-related questions in the chat input
3. Receive personalized explanations tailored to your preferences
4. Adjust your preferences at any time to change how information is presented

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- Next.js team for the amazing framework