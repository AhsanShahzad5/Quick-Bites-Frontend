import { useEffect, useState } from 'react';
import { Progress } from './ui/progress';
import colors from '@/styles/theme';


const LoadingComponent = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(90);
    }, 100);
    const timer1 = setTimeout(() => {
      setProgress(40);
    }, 900);
    const timer2 = setTimeout(() => {
      setProgress(0);
    }, 2000);

    return (() => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    })


  }, []);


  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-3/4 max-w-lg transform scale-x-[-1]">
        <Progress value={progress} className={`h-4 ${colors.mainBgColor}`} />
      </div>
    </div>
  );
};

export default LoadingComponent;
