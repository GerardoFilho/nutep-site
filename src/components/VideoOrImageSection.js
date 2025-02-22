import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  max-width: 1200px;
  text-align: center;
`;

/* Container do vídeo ou imagem */
const MediaWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  aspect-ratio: 16 / 9; /* Mantém proporção se quiser */
  background: #ccc;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

/* Se for imagem estática */
const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* Se for vídeo HTML5 local */
const VideoHTML5 = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  outline: none;
`;

/* Se for Youtube embed (ou outro iframe) */
const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

function VideoOrImageSection({
  mediaType = "video", // 'image' | 'video' | 'youtube'
  mediaSrc = "",
}) {
  return (
    <SectionWrapper>
      <MediaWrapper>
        {mediaType === "image" && <ThumbImage src={mediaSrc} alt="Thumb" />}

        {mediaType === "video" && (
          <VideoHTML5 controls>
            <source src={mediaSrc} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </VideoHTML5>
        )}

        {mediaType === "youtube" && (
          <Frame
            src={mediaSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Vídeo do YouTube"
          />
        )}
      </MediaWrapper>
    </SectionWrapper>
  );
}

export default VideoOrImageSection;
