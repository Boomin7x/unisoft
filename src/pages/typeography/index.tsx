import React from "react";

const Typography = () => {
  return (
    <div className="flex flex-col min-h-[80vh]">
      <section className="py-16 container mx-auto">
        <div className="px-4 py-8">
          {/* Display Typography */}
          <div className="mb-16">
            <h1 className="text-display-2xl text-gradient text-balance mb-8">
              Display Typography System
            </h1>

            <div className="space-y-6">
              <h2 className="text-display-xl">Display XL - Hero Headlines</h2>
              <h3 className="text-display-lg">
                Display Large - Section Titles
              </h3>
              <h4 className="text-display-md">
                Display Medium - Subsection Titles
              </h4>
              <h5 className="text-display-sm">Display Small - Card Titles</h5>
            </div>
          </div>

          {/* Heading Typography */}
          <div className="mb-16">
            <h2 className="text-heading-xl mb-8">Heading Typography</h2>

            <div className="space-y-4">
              <h3 className="text-heading-xl">
                Heading XL - Main Section Headers
              </h3>
              <h4 className="text-heading-lg">
                Heading Large - Subsection Headers
              </h4>
              <h5 className="text-heading-md">Heading Medium - Card Headers</h5>
              <h6 className="text-heading-sm">Heading Small - Form Labels</h6>
            </div>
          </div>

          {/* Body Typography */}
          <div className="mb-16">
            <h2 className="text-heading-lg mb-8">Body Typography</h2>

            <div className="space-y-4">
              <p className="text-body-xl">
                Body XL - Large body text for important content and
                introductions. This size is perfect for lead paragraphs and key
                information that needs to stand out.
              </p>
              <p className="text-body-lg">
                Body Large - Standard body text for most content. This is the
                default size for paragraphs and general text content throughout
                the application.
              </p>
              <p className="text-body-md">
                Body Medium - Smaller body text for secondary content,
                descriptions, and supplementary information that doesn't need as
                much emphasis.
              </p>
              <p className="text-body-sm">
                Body Small - The smallest body text for fine print, captions,
                and less important information that should be present but not
                prominent.
              </p>
            </div>
          </div>

          {/* Utility Typography */}
          <div className="mb-16">
            <h2 className="text-heading-lg mb-8">Utility Typography</h2>

            <div className="space-y-4">
              <p className="text-label">
                Label - Form labels and interactive elements
              </p>
              <p className="text-caption">
                Caption - Image captions and metadata
              </p>
              <p className="text-gradient font-bold">
                Gradient Text - Special emphasis with gradient
              </p>
              <p className="text-body-lg text-balance">
                Balanced Text - This text uses text-balance for better text
                wrapping and more visually appealing line breaks, especially
                useful for headings and important content blocks.
              </p>
            </div>
          </div>

          {/* Font Weight Examples */}
          <div className="mb-16">
            <h2 className="text-heading-lg mb-8">Font Weight Examples</h2>

            <div className="space-y-2">
              <p className="text-body-lg font-thin">
                Thin (100) - Very light weight for subtle text
              </p>
              <p className="text-body-lg font-extralight">
                Extra Light (200) - Light weight for secondary text
              </p>
              <p className="text-body-lg font-light">
                Light (300) - Light weight for body text
              </p>
              <p className="text-body-lg font-normal">
                Normal (400) - Default weight for most text
              </p>
              <p className="text-body-lg font-medium">
                Medium (500) - Medium weight for emphasis
              </p>
              <p className="text-body-lg font-semibold">
                Semibold (600) - Strong emphasis
              </p>
              <p className="text-body-lg font-bold">
                Bold (700) - Strong headings and important text
              </p>
              <p className="text-body-lg font-extrabold">
                Extra Bold (800) - Very strong emphasis
              </p>
              <p className="text-body-lg font-black">
                Black (900) - Maximum weight for hero text
              </p>
            </div>
          </div>

          {/* Responsive Demo */}
          <div className="mb-16">
            <h2 className="text-heading-lg mb-8">Responsive Typography Demo</h2>

            <div className="space-y-4">
              <h3 className="text-display-lg text-balance">
                This heading scales from 2xl on mobile to 5xl on large screens
              </h3>
              <p className="text-body-xl text-balance">
                This body text scales from lg on mobile to 3xl on large screens,
                demonstrating how the typography system adapts to different
                screen sizes while maintaining proper hierarchy and readability.
              </p>
            </div>
          </div>

          {/* Color and Style Examples */}
          <div className="mb-16">
            <h2 className="text-heading-lg mb-8">Color and Style Examples</h2>

            <div className="space-y-4">
              <p className="text-body-lg text-primary">Primary Color Text</p>
              <p className="text-body-lg text-secondary-foreground">
                Secondary Color Text
              </p>
              <p className="text-body-lg text-muted-foreground">
                Muted Color Text
              </p>
              <p className="text-body-lg text-gradient font-bold">
                Gradient Text with Bold Weight
              </p>
              <p className="text-body-lg text-destructive">
                Destructive/Error Text
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Typography;
