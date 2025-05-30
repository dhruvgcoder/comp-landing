import React from 'react';
import { Twitter, Github as GitHub, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const SocialLinks: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: GitHub, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <div className="w-full py-8">
      <div className="flex justify-center space-x-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            aria-label={`Follow us on ${social.name}`}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;