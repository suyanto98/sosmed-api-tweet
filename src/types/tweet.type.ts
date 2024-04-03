export interface Itweet {
  userId: number;
  tweet: string;
}

export interface IlikeTweet {
  userId: number;
  tweetId: number;
}

export interface Icomment {
  userId: number;
  tweetId: number;
  comment: string;
}

export interface IcommentTweet {
  userId: number;
  tweetId: number;
}
