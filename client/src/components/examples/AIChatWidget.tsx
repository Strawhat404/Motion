import { AIChatWidget } from "../AIChatWidget";
import { ThemeProvider } from "../ThemeProvider";

export default function AIChatWidgetExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">AI Chat Widget Demo</h2>
          <p className="text-muted-foreground">Click the chat button in the bottom right</p>
        </div>
        <AIChatWidget />
      </div>
    </ThemeProvider>
  );
}
