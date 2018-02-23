import React from 'react';
import { storiesOf } from '@storybook/react';
import WordCloud from '../src/component/wordcloud';

const data = [
  { value: 115835, name: 'life' },
  { value: 78562, name: 'photography' },
  { value: 62453, name: 'steemit' },
  { value: 45831, name: 'blog' },
  { value: 38690, name: 'art' },
  { value: 32495, name: 'bitcoin' },
  { value: 29032, name: 'nature' },
  { value: 27722, name: 'cryptocurrency' },
  { value: 27675, name: 'story' },
  { value: 25752, name: 'travel' },
  { value: 24354, name: 'busy' },
  { value: 23617, name: 'news' },
  { value: 22315, name: 'steem' },
  { value: 21568, name: 'funny' },
  { value: 20074, name: 'writing' },
  { value: 19844, name: 'introduceyourself' },
  { value: 18490, name: 'indonesia' },
  { value: 17766, name: 'food' },
  { value: 16985, name: 'photo' },
  { value: 16761, name: 'spanish' },
  { value: 16632, name: 'crypto' },
  { value: 16433, name: 'aceh' },
  { value: 16345, name: 'money' },
  { value: 14900, name: 'love' },
  { value: 14315, name: 'dtube' },
  { value: 13415, name: 'kr' },
  { value: 12226, name: 'new' },
  { value: 11889, name: 'meme' },
  { value: 11603, name: 'video' },
  { value: 11310, name: 'music' },
  { value: 10737, name: 'blockchain' },
  { value: 9595, name: 'cervantes' },
  { value: 9575, name: 'health' },
  { value: 8545, name: 'fun' },
  { value: 8464, name: 'entertainment' },
  { value: 7916, name: 'poetry' },
  { value: 7629, name: 'steepshot' },
  { value: 7616, name: 'cn' },
  { value: 7558, name: 'nigeria' },
  { value: 7499, name: 'technology' },
  { value: 7459, name: 'dmania' },
  { value: 7434, name: 'science' },
  { value: 7191, name: 'philippines' },
  { value: 6367, name: 'contest' },
  { value: 6231, name: 'politics' },
  { value: 6112, name: 'colorchallenge' },
  { value: 5960, name: 'kr-newbie' },
  { value: 5716, name: 'drawing' },
  { value: 5567, name: 'history' },
  { value: 4845, name: 'motivation' },
  { value: 4722, name: 'utopian-io' },
  { value: 4627, name: 'animals' },
  { value: 4606, name: 'venezuela' },
  { value: 4542, name: 'esteem' },
  { value: 4462, name: 'gaming' },
  { value: 4392, name: 'ethereum' },
  { value: 4267, name: 'education' },
  { value: 4147, name: 'beauty' },
  { value: 4146, name: 'tr' },
  { value: 4051, name: 'animal' },
  { value: 3909, name: 'stach' },
  { value: 3884, name: 'deutsch' },
  { value: 3859, name: 'philosophy' },
  { value: 3837, name: 'sport' },
  { value: 3824, name: 'whalepower' },
  { value: 3699, name: 'creativity' },
  { value: 3672, name: 'community' },
  { value: 3647, name: 'dlive' },
  { value: 3614, name: 'sports' },
  { value: 3500, name: 'promo-steem' },
  { value: 3482, name: 'trading' },
  { value: 3414, name: 'world' },
  { value: 3368, name: 'untalented' },
  { value: 3346, name: 'introducemyself' },
  { value: 3345, name: 'ico' },
  { value: 3307, name: 'youtube' },
  { value: 3198, name: 'sevendaybnwchallenge' },
  { value: 3176, name: 'family' },
  { value: 3163, name: 'natural' },
  { value: 3097, name: 'flower' },
  { value: 3091, name: 'ksi' },
  { value: 2985, name: 'india' },
  { value: 2964, name: 'photofeed' },
  { value: 2959, name: 'btc' },
  { value: 2925, name: 'poem' },
  { value: 2911, name: 'adventure' },
  { value: 2892, name: 'steemph' },
  { value: 2843, name: 'smartphonephotography' },
  { value: 2843, name: 'vincentb' },
  { value: 2783, name: 'inspiration' },
  { value: 2776, name: 'painting' },
  { value: 2760, name: 'castellano' },
  { value: 2731, name: 'fiction' },
  { value: 2643, name: 'business' },
  { value: 2634, name: 'religion' },
  { value: 2548, name: 'freedom' },
  { value: 2492, name: 'humor' },
];


storiesOf('Wordcloud Chart', module)
  .add('wordcloud chart', () => (
    <WordCloud data={data} />
  ));