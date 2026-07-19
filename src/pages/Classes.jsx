import React from 'react';
import ClassesHeader from '../components/ClassesHeader';
import ClassTypes from '../components/ClassTypes';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import FloatingBookButton from '../components/FloatingBookButton';

const Classes = () => {
  return (
    <div className="classes-page animate-fade-in" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <ClassesHeader />
      <ClassTypes />
      <Schedule />
      <FAQ />
      <FloatingBookButton />
    </div>
  );
};

export default Classes;
