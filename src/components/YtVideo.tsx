import React, { FC } from "react";

interface EmbededVideo {
  id: string;
}

const YoutubeEmbed: FC<EmbededVideo> = (props: EmbededVideo) => (
  <iframe
    src={`https://www.youtube.com/embed/${props.id}?&autoplay=1 `}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={`1`}
    className="h-[70vh] w-[100vh]"
  />
);

export default YoutubeEmbed;
