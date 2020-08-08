/**
 * @author Mitchell L.
 */

import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react'
import DropdownButton from "../../components/DropdownButton";

describe("Dropdown tests", () => {
  describe("Component", () => {
    it("Dropdown text test", () => {
      const {getByText} = render(<DropdownButton text = "Click here for a dropdown!" dropdownlist = {[
        {key: "1", name: "Custom Button Name 1", link: "#/button1"},
        {key: "2", name: "Custom Button Name 2", link: "#/button2"},
        {key: "3", name: "Custom Button Name 3", link: "#/button3"}
        ]} /> )
      expect(getByText('Click here for a dropdown!')).toBeInTheDocument();
      act (() => {
        fireEvent.click(screen.getByText('Click here for a dropdown!'))
      });
      expect(getByText('Custom Button Name 1')).toBeInTheDocument();
      expect(getByText('Custom Button Name 2')).toBeInTheDocument();
      expect(getByText('Custom Button Name 3')).toBeInTheDocument();
    });
  });
})