// Author: Harshil Shah
const variables = {'backendURL': 'https://classmate-backend.onrender.com', 'frontendURL': 'https://classmate-g7.netlify.app/'};

const entries = Object.entries(variables);
const envVariables: Record<string, string> = {};

entries.forEach(([key, value]) => {
    // const [key, value] = line.split('=');
    envVariables[key] = value || '';

});

export default envVariables;