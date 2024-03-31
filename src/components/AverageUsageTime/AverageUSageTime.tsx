/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
interface AverageUSageTimeProps {
  children: ReactNode;
}
function AverageUSageTime({ children }: AverageUSageTimeProps) {
  const userId = useSelector((state: RootState) => state.user.userId);

  useEffect(() => {
    let startTime: Date;
    // function formatTime(date: Date) {
    //   const hours = date.getHours();
    //   const minutes = date.getMinutes();
    //   const seconds = date.getTime();
    //   const ampm = hours >= 12 ? "pm" : "am";
    //   const formattedHours = hours % 12 || 12;
    //   const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    //   const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    //   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}${ampm}`;
    // }

    async function sendActiveDuration(userId: string, activeDuration: number) {
      try {
        const response = await axiosInstance.post("/users/active-duration", {
          userId,
          activeDuration,
        });
        if (response && response.data.success) {
          console.log("Active duration sent successfully");
        }
      } catch (error) {
        console.error("Error sending active duration:", error);
      }
    }

    // Function to initialize startTime on first interaction
    function initializeStartTime() {
      if (!startTime) {
        startTime = new Date();
      }
    }

    // Attach the event listener to the document
    document.addEventListener("mousemove", initializeStartTime);
    document.addEventListener("keydown", initializeStartTime);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        const endTime = new Date();
        const activeDuration = (endTime.getTime() - startTime.getTime()) / 1000;
        console.log("Active duration:", activeDuration);
        sendActiveDuration(userId, activeDuration);
      } else {
        startTime = new Date();
      }
    });

    // window.addEventListener("beforeunload", () => {
    //   const endTime = new Date();
    //   const activeDuration = (endTime.getTime() - startTime.getTime()) / 1000;
    //   console.log("Active duration:", activeDuration);
    //   sendActiveDuration(userId, activeDuration);
    // });
  }, []);

  return <>{children}</>;
}

export default AverageUSageTime;
