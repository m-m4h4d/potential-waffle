import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_URL = process.argv[2];

if (!GITHUB_URL) {
  console.error('Please provide a GitHub project URL.');
  process.exit(1);
}

const match = GITHUB_URL.match(/github\.com\/([^/]+)\/([^/]+)/);
if (!match) {
  console.error('Invalid GitHub URL.');
  process.exit(1);
}

const [, owner, repo] = match;
const API_URL = `https://api.github.com/repos/${owner}/${repo}`;

async function fetchProjectData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    const data = await response.json();

    const newProject = {
      title: data.name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      description: data.description || 'No description provided.',
      image: '/assets/placeholder.png', // Default placeholder
      tags: data.topics.length > 0 ? data.topics.slice(0, 4) : ['GitHub', 'Open Source'],
      github: data.html_url,
      demo: data.homepage || data.html_url,
    };

    updateProjectsFile(newProject);
  } catch (error) {
    console.error('Error fetching project data:', error.message);
  }
}

function updateProjectsFile(newProject) {
  const filePath = path.resolve(__dirname, '../src/data/projects.ts');
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find the array content
  const arrayStart = content.indexOf('export const projects: Project[] = [');
  const arrayEnd = content.lastIndexOf('];');

  if (arrayStart === -1 || arrayEnd === -1) {
    console.error('Could not find projects array in projects.ts');
    return;
  }

  const existingArrayContent = content.substring(arrayStart + 'export const projects: Project[] = ['.length, arrayEnd).trim();
  
  // Format the new project object
  const newProjectStr = `  {
    title: "${newProject.title}",
    description: "${newProject.description}",
    image: "${newProject.image}",
    tags: ${JSON.stringify(newProject.tags)},
    github: "${newProject.github}",
    demo: "${newProject.demo}"
  }`;

  // Combine
  const updatedContent = content.substring(0, arrayEnd).trim() + (existingArrayContent ? ',\n' : '\n') + newProjectStr + '\n];\n';

  fs.writeFileSync(filePath, updatedContent);
  console.log(`Successfully added project: ${newProject.title}`);
}

fetchProjectData();
