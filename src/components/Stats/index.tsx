import React from 'react';

import * as Styled from './styles';

type StatsProps = {
  label: string;
  statsNumber: number;
  color: PokemonTypeColors;
};
export const Progress = ({
  statsNumber,
  color,
}: Pick<StatsProps, 'statsNumber' | 'color'>) => {
  return (
    <Styled.ProgressContainer>
      <Styled.Progress
        progress={(statsNumber / 255) * 100}
        progressColor={color}
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
