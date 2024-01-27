import { useState } from 'react';

function ProgressBar({value, onUpdateProgress }) {
  const [progress, setProgress] = useState(50); // Initial progress value

  
  // Function to update progress
  const updateProgress = (event) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    let newProgress = (clickPosition / progressBar.clientWidth) * 100;

    // Limit progress to the range [0, 100]
    newProgress = Math.max(0, Math.min(100, newProgress));
    newProgress = Math.round(newProgress);
    
    setProgress(newProgress);
    onUpdateProgress(newProgress);
  };

  const dotLeft = `calc(${value}% - 0.7rem)`; // Calculate left position for the dot

  return (
    <div className="w-[18.25rem] h-[0.6rem] rounded-[0.5rem] bg-violet-500 relative" onClick={updateProgress}>
      {/* Progress Bar */}
      <div
        className="w-[18.25rem] h-[0.6rem] left-0 absolute bg-violet-500 rounded-[0.5rem]"
        style={{ width: `${value}%` }}
      />

      {/* White Dot */}
      <div
        className="w-[1.4rem] h-[1.4rem] flex justify-center items-center left-0 top-[-0.5rem] absolute bg-white rounded-full shadow"
        style={{ left: dotLeft }}
      >
        <div
      className="w-[1.06rem] h-[1.06rem] bg-violet-500 rounded-full"
    />
        </div>
    </div>
  );
}

export default ProgressBar;
