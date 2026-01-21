type Props = {
  data: any;
};

export default function ResumeResult({ data }: Props) {
  const {
    Name,
    Email,
    Phone,
    Gender,
    role,
    location,
    address,
    Skills,
    Experience,
    Education,
    soft_skills,
    Social_links,
  } = data;

  return (
    <div className="mt-8 space-y-8">

      <Section title="Basic Information">
        <Item label="Name" value={Name} />
        <Item label="Role" value={role} />
        <Item label="Gender" value={Gender} />
        <Item label="Location" value={formatValue(location)} />
      </Section>

      <Section title="Contact Details">
        <Item label="Email" value={Email} />
        <Item label="Phone" value={Phone} />
        <Item label="Address" value={formatValue(address)} />
      </Section>

      <Section title="Skills">
        <TagList items={Skills} />
      </Section>

      <Section title="Experience">
        {renderComplexField(Experience)}
      </Section>

      <Section title="Education">
        {renderComplexField(Education)}
      </Section>

      <Section title="Soft Skills">
        <TagList items={soft_skills} />
      </Section>

      {Social_links && (
        <Section title="Social Profiles">
          {Object.entries(Social_links).map(([key, value]) => (
            <a
              key={key}
              href={String(value)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline"
            >
              {key}
            </a>
          ))}
        </Section>
      )}
    </div>
  );
}


function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground mb-4">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Item({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <span className="font-medium text-foreground min-w-[120px]">
        {label}:
      </span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
}

function renderComplexField(field: any) {
  if (!field) return null;

  if (typeof field === "string") {
    return <p className="text-muted-foreground">{field}</p>;
  }

  if (Array.isArray(field)) {
    return (
      <ul className="list-disc pl-5 text-muted-foreground">
        {field.map((item, i) => (
          <li key={i}>{formatValue(item)}</li>
        ))}
      </ul>
    );
  }

  if (typeof field === "object") {
    return (
      <div className="space-y-1">
        {Object.entries(field).map(([key, value]) => (
          <div key={key} className="flex gap-2">
            <span className="font-medium capitalize">
              {key.replace("_", " ")}:
            </span>
            <span className="text-muted-foreground">
              {formatValue(value)}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function formatValue(value: any): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object")
    return Object.values(value).join(", ");
  return "";
}

function TagList({ items }: { items?: any }) {
  const normalizedItems = normalizeToArray(items);

  if (normalizedItems.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {normalizedItems.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="
            px-3 py-1 rounded-full
            bg-muted text-muted-foreground
            text-sm font-medium
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function normalizeToArray(value: any): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value === "string") {
    return value.split(",").map(v => v.trim()).filter(Boolean);
  }

  if (typeof value === "object") {
    return Object.values(value).map(String);
  }

  return [];
}