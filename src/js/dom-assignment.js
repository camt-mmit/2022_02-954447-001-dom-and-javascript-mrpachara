import { assign as assignSection } from './section.js';

document.addEventListener('DOMContentLoaded', () => {
  const sectionTemplate = document.querySelector('template#tmp-section');
  const inputTemplate = document.querySelector('template#tmp-input');
  const container = document.body;

  assignSection(container, sectionTemplate, inputTemplate);
});
