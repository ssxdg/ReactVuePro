import React from 'react';
import { useParams } from 'react-router-dom';
import SkillDetail from './SkillDetail';
import './SkillPage.css';

export default function SkillPage() {
  const { skillId } = useParams();
  return <SkillDetail skillId={skillId} />;
}
