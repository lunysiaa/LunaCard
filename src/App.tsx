import React from 'react';
import './App.css';
import type { IconType } from 'react-icons';
import { FaDiscord, FaSpotify, FaYoutube, FaSteam, FaLink, FaGithub } from 'react-icons/fa';
import { SiKofi } from "react-icons/si";
import BackgroundCanvas from './components/BackgroundCanvas';

const PROFILE = {
  name: "Luna <3",
  bio: "✦ moon traveler / 月の旅人 ✦",
  japaneseVibes: ["🌙 月の光", "🌐 アイティー", "💖 あなたはきれいです"],
  avatarImage: "/me.jpg",
  avatarEmoji: "",
};

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  icon: IconType;
}

const LINKS: LinkItem[] = [
    {
    id: "kofi",
    name: "Ko-fi · 応援する",
    url: "https://ko-fi.com/lunysiaa",
    icon: SiKofi,
  },
  {
    id: "discord",
    name: "Discord · コミュニティ",
    url: "https://discord.gg/yourinvite",
    icon: FaDiscord,
  },
  {
    id: "github",
    name: "GitHub · ギットハブ",
    url: "https://github.com/lunysiaa",
    icon: FaGithub,
  },
  {
    id: "spotify",
    name: "Spotify · プレイリスト",
    url: "https://open.spotify.com/user/7mkzvgd9l5nyp8thk2ebot2kn?si=2734b5661d934c96",
    icon: FaSpotify,
  },
  {
    id: "youtube",
    name: "YouTube · ようつべ",
    url: "https://www.youtube.com/@lunysiaa",
    icon: FaYoutube
  },
  {
    id: "steam",
    name: "Steam · すちーむ",
    url: "https://steamcommunity.com/id/lunysiaa",
    icon: FaSteam,
  },
  {
    id: "other",
    name: "Other · ブログ",
    url: "",
    icon: FaLink,
  },
];

const App: React.FC = () => {
  const renderAvatar = () => {
    if (PROFILE.avatarImage) {
      return (
        <div className="pixel-avatar">
          <img src={PROFILE.avatarImage} alt={`${PROFILE.name} avatar`} />
        </div>
      );
    } else {
      return (
        <div className="pixel-avatar" style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
          {PROFILE.avatarEmoji || "🎴"}
        </div>
      );
    }
  };

  return (
    <>
      <BackgroundCanvas />
      <div className="link-card">
        <div className="avatar-wrapper">{renderAvatar()}</div>
        <div className="display-name">{PROFILE.name}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="bio-text">{PROFILE.bio}</div>
        </div>
        <div className="japanese-tag">
          {PROFILE.japaneseVibes.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <div className="links-grid">
          {LINKS.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <span className="button-icon">
                  <IconComponent />
                </span>
                <span className="link-text">{link.name}</span>
              </a>
            );
          })}
        </div>
        <div className="pixel-deco">
          <span>◢ ◣</span> <span>✧ つながっている ✧</span> <span>◥ ◤</span>
        </div>
        <div className="footer-links">
          <a href="#" onClick={(e) => e.preventDefault()}>🌐 タイプスクリプトとテイルウィンドCSS</a>
          <a href="#" onClick={(e) => e.preventDefault()}>🎴 ドイツ人です</a>
          <a href="#" onClick={(e) => e.preventDefault()}>🗻 これはセルフホストです</a>
        </div>
      </div>
    </>
  );
};

export default App;