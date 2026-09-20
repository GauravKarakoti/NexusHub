"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// TODO 1: Define SocketContext interface
const SocketContext = createContext<any | null>(null);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // TODO 2: Initialize socket connection when user is authenticated
    // TODO 3: Handle connection teardown on unmount
  }, []);

  return (
    <SocketContext.Provider value={{ /* TODO 4: Expose socket instance */ }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);