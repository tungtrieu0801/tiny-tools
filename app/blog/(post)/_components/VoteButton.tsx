'use client';
import { useState } from 'react';

export default function VoteButton({ initialVotes }: { initialVotes: number }) {
    const [votes, setVotes] = useState(initialVotes);
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = () => {
        if (hasVoted) {
            setVotes(v => v - 1);
            setHasVoted(false);
        } else {
            setVotes(v => v + 1);
            setHasVoted(true);
        }
    };

    return (
        <div className="flex flex-col items-center gap-1 group">
            <button
                onClick={handleVote}
                className={`p-3 rounded-full shadow transition-all duration-300 ${
                    hasVoted
                        ? 'bg-blue-600 text-white shadow-blue-300 transform scale-110'
                        : 'bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                </svg>
            </button>
            <span className={`font-bold text-lg transition-colors ${hasVoted ? 'text-blue-600' : 'text-gray-500'}`}>
        {votes}
      </span>
        </div>
    );
}