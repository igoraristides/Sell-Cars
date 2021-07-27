import React from 'react';

import PropTypes from 'prop-types';

import useTable from '~/hooks/useTable';

import { Container } from './styles';
import Tbody from './Tbody';
import Td from './Td';
import TdContentLoad from './TdContentLoad';
import Th from './Th';
import Thead from './Thead';
import Tr from './Tr';

const Table = ({ loading, columns, rows, preLoadRows, actions, onSort }) => {
  const {
    renderThead,
    renderTbody,
    renderTbodyNoContent,
    renderTbodyLoadingContent,
  } = useTable({ onSort });

  const getContent = () => {
    if (!rows.length && loading && preLoadRows) {
      return renderTbodyLoadingContent(
        columns,
        preLoadRows,
        Tr,
        Td,
        TdContentLoad
      );
    }

    if (!rows.length && !loading) {
      return renderTbodyNoContent(columns, Tr, Td);
    }

    return renderTbody(columns, rows, Tr, Td, actions);
  };

  return (
    <Container>
      <Thead>
        <Tr>{renderThead({ columns, ThComponent: Th })}</Tr>
      </Thead>
      <Tbody>{getContent()}</Tbody>
    </Container>
  );
};

Table.defaultProps = {
  loading: false,
  preLoadRows: 0,
  actions: {},
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  preLoadRows: PropTypes.number,
};

export default Table;
