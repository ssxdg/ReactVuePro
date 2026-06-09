import { htmlSkillContent, htmlCategory } from './skills/html.js';
import { cssSkillContent, cssCategory } from './skills/css.js';
import { jsSkillContent, jsCategory } from './skills/javascript.js';
import { tsSkillContent, tsCategory } from './skills/typescript.js';
import { vue2SkillContent, vue2Category } from './skills/vue2.js';
import { vue3SkillContent, vue3Category } from './skills/vue3.js';
import { reactSkillContent, reactCategory } from './skills/react.js';

const skillContent = Object.assign({},
  htmlSkillContent, cssSkillContent, jsSkillContent,
  tsSkillContent, vue2SkillContent, vue3SkillContent, reactSkillContent
);

const skillCategories = [
  htmlCategory, cssCategory, jsCategory,
  tsCategory, vue2Category, vue3Category, reactCategory
];

function getSkill(id) {
  return skillContent[id] || null;
}

function getCategoryBySkillId(id) {
  for (var i = 0; i < skillCategories.length; i++) {
    var cat = skillCategories[i];
    for (var j = 0; j < cat.skills.length; j++) {
      if (cat.skills[j].id === id) return cat;
    }
  }
  return null;
}

export { skillCategories, skillContent, getSkill, getCategoryBySkillId };
