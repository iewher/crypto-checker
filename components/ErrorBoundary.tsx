"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
              padding: "40px",
              textAlign: "center",
              color: "#6b7280",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            <div>
              <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
                Что-то пошло не так
              </h2>
              <p style={{ marginBottom: "16px" }}>
                {this.state.error?.message || "Неизвестная ошибка"}
              </p>
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Попробовать снова
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
