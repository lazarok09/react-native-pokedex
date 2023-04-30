import React from 'react';

import * as Styled from './styles';

type StatsProps = {
  label: string;
  statsNumber: number;
};
export const Progress = ({statsNumber}: Pick<StatsProps, 'statsNumber'>) => {
  return (
    <Styled.ProgressContainer>
      <Styled.Progress
        progress={(statsNumber / 255) * 100}
        progressColor={'#F08030'}
      />
    </Styled.ProgressContainer>
  );
};

export const Label = ({label}: Pick<StatsProps, 'label'>) => {
  return <Styled.HpText>{label}</Styled.HpText>;
};

export const StatusNumber = ({
  statsNumber,
}: Pick<StatsProps, 'statsNumber'>) => {
  return <Styled.StatusNumber>{statsNumber}</Styled.StatusNumber>;
};
