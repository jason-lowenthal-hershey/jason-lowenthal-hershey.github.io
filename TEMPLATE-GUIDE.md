# Weekly Work Expansion - HTML Template Guide

## Overview

This template is designed to make it easy to write your weekly reflections in a beautiful, scannable format that works great on GitHub Pages.

## Getting Started

1. **Copy the template**: Use `weekly-expansion-template.html` as your starting point
2. **Rename it**: Change to something like `weekly-expansion-may-12-2026.html`
3. **Update the title**: Change the `<title>` tag and the header `<h1>`
4. **Fill in the sections**: Follow the prompts in HTML comments

## Template Structure

The template has **6 main sections**, each with a clear purpose:

### 1. **The Opening** (150-250 words)
Your hook. Start with a personal observation or question that draws readers in.
- ✅ "Recently, I found myself wrestling with..."
- ✅ "The team was working on something interesting..."
- ✅ Personal, conversational, human

### 2. **What We Were Working On** (200-300 words)
Context and the problem/situation.
- Explain what you were building/solving
- Why it mattered
- Keep it in principle-based language (avoid specific tools/tech)

### 3. **How We Thought Through It** (200-300 words)
The heart of the piece: your thinking process, collaboration, principles.
- Show the reasoning, not just the decision
- Use the "Competing Priorities" section to list tradeoffs
- Include stories about how team members collaborated
- Keep it warm and genuine

### 4. **What This Taught Us** (200-250 words)
Extract broader meaning from the experience.
- Connect specific story to bigger principles
- Reflect on problem-solving approach
- Discuss what constraints actually teach you
- Highlight what matters in teamwork

### 5. **Why This Matters** (200-250 words)
So what? Why should people care?
- Connect to bigger ideas about building products
- Show what this reveals about team culture
- Make it relevant beyond just your week

### 6. **Looking Back** (150-200 words)
Closing reflection that ties it together.
- Return to your opening theme
- Show growth or new perspective
- Leave readers with something to think about

## Writing Tips

### Voice & Tone
- Write conversationally (as if talking to a smart friend)
- Show your thinking process, not just conclusions
- Be curious and exploratory, not preachy
- Use "we" language when describing team work

### What to Include
✅ Team collaboration moments  
✅ How you approached problems  
✅ What you learned  
✅ Bigger principles and insights  
✅ Personal observations and reflections  

### What to Avoid
❌ Specific tool names (write "data store" not "PostgreSQL")  
❌ Technical implementation details  
❌ Security or proprietary information  
❌ Internal politics or drama  
❌ Jargon without explanation  

### Making it Scannable
- Use the h2 and h3 headings (they format beautifully)
- Keep paragraphs 3-5 sentences
- Use bullet points in key-points section
- Use the highlight-box or insight-card for important ideas

## Styling Features

The template comes with built-in styling:

- **Responsive design** - looks great on mobile and desktop
- **Dark mode support** - automatically adapts to user preferences
- **Gradient header** - professional, modern look
- **Highlighted sections** - key insights stand out
- **Left-side accent bars** - visual hierarchy
- **Smooth hover effects** - interactive feel

## Adding References

At the bottom, add 2-5 relevant sources:

```html
<a href="https://example.com/article">Article Title - Author</a>
<a href="https://example.com/another">Another Source - Publication</a>
```

These show as clickable links and support your thinking.

## Customization Ideas

### Change the colors
Find `:root` at the top of the `<style>` section:
```css
:root {
    --primary: #2c3e50;      /* Main color */
    --secondary: #3498db;    /* Accent color */
    --accent: #e74c3c;       /* Highlight color */
}
```

### Adjust font sizes
Look for `font-size: 1.8rem` and modify the values.

### Add more sections
Just copy a `<section class="section">...</section>` and customize.

### Remove sections
If you don't need references, just delete that section.

## Publishing to GitHub Pages

1. Save the HTML file in your repo
2. Commit and push: `git add . && git commit -m "Add weekly expansion" && git push`
3. View it at: `https://yourusername.github.io/path/to/file.html`

You can also:
- Create a `/blog` folder for all your posts
- Add a main index with links to all your weekly posts
- Reference posts from your main site's blog page

## Example Workflow

1. During the week: Take notes on interesting moments
2. End of week: Review notes, identify the main theme
3. Sunday afternoon: Spend 60-90 minutes filling in the template
4. Read through once, make small tweaks
5. Commit and publish
6. Share with your team/network

## Questions to Ask Yourself While Writing

- What surprised me this week?
- What did I learn about how we work?
- What would I want to remember about this week in a year?
- What insight might be valuable to others building products?
- How did collaboration make a difference?
- What constraint actually taught us something important?

---

Have fun writing! This is your chance to capture not just what you built, but how you think about building it.
