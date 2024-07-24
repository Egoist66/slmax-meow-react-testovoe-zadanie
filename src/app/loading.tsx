import { FC } from "react";


const LoadingBlogs: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-20 h-20 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin">
        <div className="absolute inset-0 rounded-full border-2 border-purple-500 border-opacity-50"></div>
      </div>
    </div>
  );
};
export default LoadingBlogs