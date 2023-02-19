
// const { ipcRenderer} = require('electron');
import { ipcRenderer } from "electron";
import {fs} from "fs";
// const fs = require("fs");
// const path = require("path");
import { path } from "path";
const inputElement = document.getElementById("note-input");

// Add an event listener to the input element to listen for changes
inputElement.addEventListener("input", () => {
  const note = inputElement.value;
  const noteFilePath = path.join(__dirname, "notes.txt");
  console.log(note);
  // Save the note to a file
  console.log(noteFilePath);
  fs.writeFileSync(noteFilePath, note);

  // Send a message to the main process to notify that the note has been saved
  ipcRenderer.send("note-saved");

});

// Send a message to the main process to request the note content when the window is loaded
window.addEventListener("load", () => {
  ipcRenderer.send("request-note-content");
  onsole.log("note-saved sent");
});

// Receive the note content from the main process and update the input element value
ipcRenderer.on("note-content", (event, noteContent) => {
  inputElement.value = noteContent;
  console.log("note-content received");
});
