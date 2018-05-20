# `[ngl-button]`

### Input

  * `variant?: 'success' | 'neutral' | 'brand' | 'destructive' | 'inverse'`: The variant changes the appearance of the button. Accepted variants include base, neutral, brand, destructive, inverse, and success. This value defaults to neutral.
  * `iconName?: string`: The name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
  * `iconPosition?: 'left' | 'right'`: Describes the position of the icon with respect to body. Options include left and right. This value defaults to left.


# `[nglButtonIcon]`

### Input

  * `nglButtonIcon?: 'container' | 'border' | 'border-filled' | 'small' | '' = 'border'`: Buttons container.


# `[nglButtonState]`

### Input

  * `nglButtonState: boolean`: The state of the button, which shows whether the button has been selected or not. The default state is false.

### Output

  * `nglButtonStateChange: EventEmitter<boolean>`: the requested state change.

# `ngl-state-on,ngl-state-off,ngl-state-hover`

### Input

  * `iconName?: string`: The name of the icon. Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
  * `iconPosition?: 'left' | 'right'`: Describes the position of the icon with respect to body. Options include left and right. This value defaults to left.
