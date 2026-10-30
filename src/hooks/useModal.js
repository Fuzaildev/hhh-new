import { useState, useCallback } from 'react';

export function useModal(initialFilter = 'All specialties') {
  const [modal, setModal] = useState(null);
  const [filter, setFilter] = useState(initialFilter);

  const open = useCallback((type) => setModal(type), []);
  const close = useCallback(() => setModal(null), []);

  return { modal, setModal, filter, setFilter, open, close };
}
