import React, { Component } from 'react';

/**
 * Production Error Boundary to prevent crashes in complex canvas/audio trees
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('WeddingApp Component Crash caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#2B050B] text-ivory flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-gold-foil flex items-center justify-center text-burgundy-deep text-2xl font-bold mb-4 shadow-lg">
            💍
          </div>
          <h2 className="font-royal text-xl text-gold-light tracking-widest uppercase mb-2">
            Anjali &amp; Ritesh
          </h2>
          <p className="font-serif text-lg text-cream-soft max-w-md mb-6">
            Something unexpected occurred while loading the invitation. Please refresh to join the celebration.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gold-foil text-burgundy-deep font-royal text-sm font-bold tracking-wider py-2.5 px-6 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform"
          >
            Reload Invitation
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
