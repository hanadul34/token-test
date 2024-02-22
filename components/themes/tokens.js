/**
 * Do not edit directly
 * Generated on Thu, 22 Feb 2024 00:02:40 GMT
 */

module.exports = {
  "base": {
    "$description": "All the base color tokens",
    "$type": "color",
    "palette": {
      "primary30": {
        "$type": "color",
        "$value": "#4F378B"
      },
      "primary50": {
        "$type": "color",
        "$value": "#826BBB"
      },
      "primary70": {
        "$type": "color",
        "$value": "#B6A1E9"
      },
      "primary90": {
        "$type": "color",
        "$value": "#EADDFF"
      }
    },
    "backgrounds": {
      "light-primary": {
        "$type": "color",
        "$value": {
          "$type": "color",
          "$value": "#EADDFF"
        }
      },
      "dark-primary": {
        "$type": "color",
        "$value": {
          "$type": "color",
          "$value": "#4F378B"
        }
      }
    }
  },
  "sizes": {
    "$type": "dimension",
    "base spacing": {
      "$value": "0.25rem"
    },
    "digital": {
      "web": {
        "$value": "4rem"
      },
      "devices": {
        "tablet": {
          "$value": "80px"
        },
        "mobile": {
          "$value": {
            "$value": "0.25rem"
          }
        }
      }
    }
  },
  "typography": {
    "primary font": {
      "$value": "Comic Sans MS",
      "$type": "fontFamily"
    },
    "font-weight-default": {
      "$value": 350,
      "$type": "fontWeight"
    }
  },
  "animation": {
    "$description": "Random tokens",
    "basics": {
      "small": {
        "$type": "cubicBezier",
        "$description": "Basic animation coordinates",
        "$value": [
          0,
          0,
          0.5,
          1
        ]
      },
      "Duration-100": {
        "$value": "100ms",
        "$description": "Average durations of an animation",
        "$type": "duration"
      }
    }
  }
};
