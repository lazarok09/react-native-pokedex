import React from 'react';

import * as Styled from './styles';

type StatsProps = {
  label: string;
  statsNumber: number;
};
export const Stats = ({label, statsNumber}: StatsProps) => {
  return (
    <Styled.ContainerView>
      <Styled.Text>{label}</Styled.Text>
      <Styled.Text>{statsNumber}</Styled.Text>
      <Styled.Progresses>
        <Styled.ProgressContainer>
          <Styled.Progress
            progress={(statsNumber / 255) * 100}
            progressColor={'#F08030'}
          />
        </Styled.ProgressContainer>
      </Styled.Progresses>
    </Styled.ContainerView>
  );
};
