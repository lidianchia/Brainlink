import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormattedMessage, useIntl } from "react-intl";
import "remixicon/fonts/remixicon.css";

// Meditation Timer Component
const MeditationTimer = ({ onSessionComplete }) => {
  const [duration, setDuration] = useState(10); // minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60); // seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showGuidance, setShowGuidance] = useState(false);
  const [currentGuidance, setCurrentGuidance] = useState("breathing");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const guidanceTypes = [
    { key: "breathing", icon: "ri-windy-line", color: "text-blue-600", bg: "bg-blue-100" },
    { key: "bodyScan", icon: "ri-body-scan-line", color: "text-green-600", bg: "bg-green-100" },
    { key: "mindfulness", icon: "ri-eye-line", color: "text-purple-600", bg: "bg-purple-100" },
    { key: "lovingKindness", icon: "ri-heart-line", color: "text-pink-600", bg: "bg-pink-100" },
  ];

  const guidanceTexts = {
    breathing: {
      zh: "深呼吸，吸气4秒，呼气6秒，专注于呼吸的节奏...",
      en: "Deep breathing, inhale for 4 seconds, exhale for 6 seconds, focus on the rhythm of your breath..."
    },
    bodyScan: {
      zh: "从头顶开始，慢慢扫描身体的每个部位，感受身体的感觉...",
      en: "Starting from the top of your head, slowly scan each part of your body, feel the sensations..."
    },
    mindfulness: {
      zh: "观察你的思绪，像天空中的云朵一样，让它们自然地来去...",
      en: "Observe your thoughts like clouds in the sky, let them come and go naturally..."
    },
    lovingKindness: {
      zh: "在心中默念：愿我平安，愿我快乐，愿我健康，愿我自在...",
      en: "Repeat silently: May I be safe, may I be happy, may I be healthy, may I be at ease..."
    }
  };

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/music/meditation-background-409198.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set a comfortable volume
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Timer effect
  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            onSessionComplete(elapsedTime + 1);
            return 0;
          }
          return prev - 1;
        });
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isPaused, elapsedTime, onSessionComplete]);

  // Music control effect - only handle timer state changes
  useEffect(() => {
    if (audioRef.current && isMusicPlaying) {
      if (isRunning && !isPaused) {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isRunning, isPaused]); // Remove isMusicPlaying from dependencies

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setTimeLeft(duration * 60);
    setElapsedTime(0);
    setIsRunning(true);
    setIsPaused(false);
    // Music will be handled by the useEffect
  };

  const pauseTimer = () => {
    setIsPaused(true);
    // Music will be paused by the useEffect
  };

  const resumeTimer = () => {
    setIsPaused(false);
    // Music will be resumed by the useEffect if enabled
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(duration * 60);
    setElapsedTime(0);
    // Stop music and reset
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const toggleMusic = () => {
    const newMusicState = !isMusicPlaying;
    setIsMusicPlaying(newMusicState);
    
    if (audioRef.current) {
      if (newMusicState) {
        // User wants to enable music
        if (isRunning && !isPaused) {
          // If timer is running, start music immediately
          audioRef.current.play().catch(error => {
            console.log('Audio play failed:', error);
          });
        }
        // If timer is not running, music will start when timer starts
      } else {
        // User wants to disable music
        audioRef.current.pause();
      }
    }
  };

  const currentGuidanceText = guidanceTexts[currentGuidance];
  const intl = useIntl();
  const isZh = intl.locale.startsWith('zh');

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <i className="ri-timer-line text-primary"></i>
          <FormattedMessage id="Meditation.timer.title" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Duration Setting */}
        <div className="text-center">
          <label className="block text-sm font-medium mb-2">
            <FormattedMessage id="Meditation.timer.setDuration" />
          </label>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration(Math.max(1, duration - 5))}
              disabled={isRunning}
            >
              <i className="ri-subtract-line"></i>
            </Button>
            <span className="text-2xl font-bold w-16">{duration}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration(Math.min(60, duration + 5))}
              disabled={isRunning}
            >
              <i className="ri-add-line"></i>
            </Button>
            <span className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.minutes" />
            </span>
          </div>
        </div>

        {/* Timer Display */}
        <div className="text-center">
          <div className="text-6xl font-mono font-bold text-primary mb-2">
            {formatTime(timeLeft)}
          </div>
          <div className="text-sm text-muted-foreground">
            <FormattedMessage id="Meditation.timer.timeRemaining" />
          </div>
          {elapsedTime > 0 && (
            <div className="text-sm text-muted-foreground mt-1">
              <FormattedMessage id="Meditation.timer.elapsed" />: {formatTime(elapsedTime)}
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-3">
          {!isRunning ? (
            <Button onClick={startTimer} size="lg" className="font-medium">
              <i className="ri-play-line mr-2"></i>
              <FormattedMessage id="Meditation.timer.start" />
            </Button>
          ) : (
            <>
              {isPaused ? (
                <Button onClick={resumeTimer} size="lg" className="font-medium">
                  <i className="ri-play-line mr-2"></i>
                  <FormattedMessage id="Meditation.timer.resume" />
                </Button>
              ) : (
                <Button onClick={pauseTimer} variant="outline" size="lg" className="font-medium">
                  <i className="ri-pause-line mr-2"></i>
                  <FormattedMessage id="Meditation.timer.pause" />
                </Button>
              )}
              <Button onClick={stopTimer} variant="destructive" size="lg" className="font-medium">
                <i className="ri-stop-line mr-2"></i>
                <FormattedMessage id="Meditation.timer.stop" />
              </Button>
            </>
          )}
        </div>

        {/* Control Options */}
        <div className="flex justify-center gap-3">
          <Button
            variant={showGuidance ? "default" : "outline"}
            onClick={() => setShowGuidance(!showGuidance)}
            className="font-medium"
          >
            <i className={`ri-${showGuidance ? "eye-close" : "eye"}-line mr-2`}></i>
            <FormattedMessage id="Meditation.guidance.toggleGuidance" />
          </Button>
          
          <Button
            variant={isMusicPlaying ? "default" : "outline"}
            onClick={toggleMusic}
            className="font-medium"
          >
            <i className={`ri-${isMusicPlaying ? "volume-up" : "volume-mute"}-line mr-2`}></i>
            <FormattedMessage id={isMusicPlaying ? "Meditation.music.disable" : "Meditation.music.enable"} />
          </Button>
        </div>

        {/* Guidance Display */}
        {showGuidance && (
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex justify-center gap-2 mb-3">
              {guidanceTypes.map((type) => (
                <Button
                  key={type.key}
                  variant={currentGuidance === type.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentGuidance(type.key)}
                  className="flex items-center gap-1"
                >
                  <i className={`${type.icon} ${type.color}`}></i>
                </Button>
              ))}
            </div>
            <div className="text-center text-sm text-muted-foreground">
              {isZh ? currentGuidanceText.zh : currentGuidanceText.en}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Statistics Component
const MeditationStatistics = ({ records }) => {
  const [chartType, setChartType] = useState('weekly');

  const calculateStats = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const todayRecords = records.filter(r => new Date(r.date) >= today);
    const weekRecords = records.filter(r => new Date(r.date) >= weekStart);
    const monthRecords = records.filter(r => new Date(r.date) >= monthStart);

    const totalTime = records.reduce((sum, r) => sum + r.duration, 0);
    const totalSessions = records.length;

    // Calculate streak
    let streak = 0;
    const sortedDates = [...new Set(records.map(r => r.date))].sort((a, b) => new Date(b) - new Date(a));
    const todayStr = today.toISOString().split('T')[0];
    
    for (let i = 0; i < sortedDates.length; i++) {
      const recordDate = new Date(sortedDates[i]);
      const expectedDate = new Date(today);
      expectedDate.setDate(today.getDate() - i);
      
      if (recordDate.toISOString().split('T')[0] === expectedDate.toISOString().split('T')[0]) {
        streak++;
      } else {
        break;
      }
    }

    return {
      today: todayRecords.length,
      thisWeek: weekRecords.length,
      thisMonth: monthRecords.length,
      total: totalSessions,
      streak,
      averageDuration: totalSessions > 0 ? Math.round(totalTime / totalSessions) : 0,
      totalTime
    };
  };

  const stats = calculateStats();
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <i className="ri-bar-chart-line text-primary"></i>
          <FormattedMessage id="Meditation.statistics.title" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <div className="text-2xl font-bold text-primary">{stats.today}</div>
            <div className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.records.today" />
            </div>
          </div>
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{stats.thisWeek}</div>
            <div className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.records.thisWeek" />
            </div>
          </div>
          <div className="text-center p-4 bg-accent/20 rounded-lg">
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.records.total" />
            </div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{stats.streak}</div>
            <div className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.records.streak" />
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-lg font-semibold text-primary">{formatDuration(stats.totalTime)}</div>
            <div className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.statistics.totalTime" />
            </div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-lg font-semibold text-primary">{formatDuration(stats.averageDuration)}</div>
            <div className="text-sm text-muted-foreground">
              <FormattedMessage id="Meditation.records.average" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Recent Records Component
const RecentRecords = ({ records }) => {
  const recentRecords = records.slice(-5).reverse();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <i className="ri-history-line text-primary"></i>
          <FormattedMessage id="Meditation.records.title" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentRecords.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <i className="ri-meditation-line text-4xl mb-2 block"></i>
            <p>还没有冥想记录</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentRecords.map((record, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium">{new Date(record.date).toLocaleDateString()}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(record.date).toLocaleTimeString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-primary">{Math.floor(record.duration / 60)} 分钟</div>
                  <div className="text-sm text-muted-foreground">
                    {Math.floor(record.duration / 3600)}h {(record.duration % 3600) / 60}m
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Main Meditation Page Component
export default function Meditation() {
  const [records, setRecords] = useState([]);
  const intl = useIntl();

  // Load records from localStorage on component mount
  useEffect(() => {
    const savedRecords = localStorage.getItem('meditationRecords');
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  // Save records to localStorage whenever records change
  useEffect(() => {
    localStorage.setItem('meditationRecords', JSON.stringify(records));
  }, [records]);

  const handleSessionComplete = (durationInSeconds) => {
    const newRecord = {
      date: new Date().toISOString(),
      duration: durationInSeconds,
      timestamp: Date.now()
    };
    setRecords(prev => [...prev, newRecord]);
  };

  return (
    <Layout
      title={intl.formatMessage({ id: "Meditation.title" })}
      description={intl.formatMessage({ id: "Meditation.description" })}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            <FormattedMessage id="Meditation.pageTitle" />
          </h1>
          <p className="text-muted-foreground">
            <FormattedMessage id="Meditation.description" />
          </p>
        </div>

        {/* Timer Section */}
        <MeditationTimer onSessionComplete={handleSessionComplete} />

        {/* Statistics Section */}
        <MeditationStatistics records={records} />

        {/* Recent Records Section */}
        <RecentRecords records={records} />
      </div>
    </Layout>
  );
}

