export const baseui = {
  input: {
    Root: {
      style: ({ $theme }) => ({
        border: `1px solid ${$theme.colors.white}`,
      }),
    },
    Input: {
      style: () => ({
        textAlign: 'center',
      }),
    },
  },
  nestedInput: {
    Input: {
      props: {
        overrides: {
          Root: {
            style: ({ $theme }) => ({
              border: `1px solid ${$theme.colors.white}`,
            }),
          },
          Input: {
            style: () => ({
              textAlign: 'center',
            }),
          },
        },
      },
    },
  },
  inputWrapper: {
    InputWrapper: {
      style: () => ({
        width: 'auto',
        minWidth: '210px',
      }),
    },
  },
}
