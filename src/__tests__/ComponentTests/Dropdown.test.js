/**
 * @author Mitchell L.
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import DropdownButtonconst from "../../components/DropdownButton";

describe("Dropdown tests", () => {
  describe("Component", () => {
    it("testing dropdown title", () => {
      const {getByText} = render(<DropdownButtonconst text='testing dropdown title'/>)
      expect(getByText('testing dropdown title')).toBeInTheDocument();
    });
  });
})