import { useState } from 'react';
import { EVENTS } from '../data/events';
import { PARTNERS as initialPartners } from '../data/partners';
import { eventSchema, eventsSchema, type EventFormData } from '../data/eventSchema';
import { partnerSchema, partnersSchema, type PartnerFormData } from '../data/partnersSchema';
import type { ScheduleItem, Speaker } from '../types/event';

const emptySpeaker = (): Speaker => ({ id: '', name: '', role: '', org: '' });
const emptySchedule = (): ScheduleItem => ({ id: '', stage: 'palestra', title: '', timeStart: '', timeEnd: '' });
const blankEvent = (): EventFormData => ({
  id: '', slug: '', name: '', subtitle: '', niche: 'lab', dateStart: '', dateEnd: '',
  location: { name: '', address: '', geo: { lat: 0, lng: 0 }, photoUrl: '' },
  speakers: [emptySpeaker()], schedule: [emptySchedule()], status: 'draft',
});

const inputClass = 'w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm';
const labelClass = 'block text-xs font-semibold uppercase tracking-wide text-slate-600 mb-1';
const toDateTimeLocal = (value: string) => value ? value.slice(0, 16) : '';
const fromDateTimeLocal = (value: string) => value ? `${value}:00-03:00` : '';

export default function Admin() {
  const [events, setEvents] = useState<EventFormData[]>(EVENTS);
  const [partners, setPartners] = useState<PartnerFormData[]>(initialPartners);
  const [selected, setSelected] = useState(0);
  const [form, setForm] = useState<EventFormData>(EVENTS[0] ?? blankEvent());
  const [partnerForm, setPartnerForm] = useState<PartnerFormData>(initialPartners[0] ?? { id: '', name: '', tier: 'secundario', logo: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [partnerErrors, setPartnerErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');
  const [partnerMessage, setPartnerMessage] = useState('');

  const update = (change: Partial<EventFormData>) => setForm((current) => ({ ...current, ...change }));
  const updateLocation = (change: Partial<EventFormData['location']>) => update({ location: { ...form.location, ...change } });
  const updateSpeaker = (index: number, change: Partial<Speaker>) => update({ speakers: form.speakers.map((item, i) => i === index ? { ...item, ...change } : item) });
  const updateSchedule = (index: number, change: Partial<ScheduleItem>) => update({ schedule: form.schedule.map((item, i) => i === index ? { ...item, ...change } : item) });

  const selectEvent = (index: number) => { setSelected(index); setForm(events[index]); setErrors({}); setMessage(''); };
  const addEvent = () => { setSelected(-1); setForm(blankEvent()); setErrors({}); setMessage(''); };

  const save = async () => {
    const result = eventSchema.safeParse(form);
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [issue.path.join('.') || 'event', issue.message])));
      setMessage('Corrija os campos destacados.');
      return;
    }
    const nextEvents = selected >= 0 ? events.map((event, index) => index === selected ? result.data : event) : [...events, result.data];
    const allEvents = eventsSchema.safeParse(nextEvents);
    if (!allEvents.success) { setMessage('A lista de eventos contém dados inválidos.'); return; }
    const response = await fetch('/__admin/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ events: nextEvents }) });
    if (!response.ok) { setMessage('Não foi possível escrever events.ts.'); return; }
    setEvents(nextEvents); setForm(result.data); setSelected(selected < 0 ? nextEvents.length - 1 : selected); setErrors({}); setMessage('Salvo em src/data/events.ts.');
  };

  const savePartners = async () => {
    const result = partnerSchema.safeParse(partnerForm);
    if (!result.success) {
      setPartnerErrors(Object.fromEntries(result.error.issues.map((issue) => [issue.path.join('.') || 'partner', issue.message])));
      setPartnerMessage('Corrija os campos do parceiro.');
      return;
    }
    const nextPartners = partners.some((partner) => partner.id === result.data.id)
      ? partners.map((partner) => partner.id === result.data.id ? result.data : partner)
      : [...partners, result.data];
    const allPartners = partnersSchema.safeParse(nextPartners);
    if (!allPartners.success) { setPartnerMessage('A lista de parceiros contém dados inválidos.'); return; }
    const response = await fetch('/__admin/partners', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ partners: nextPartners }) });
    if (!response.ok) { setPartnerMessage('Não foi possível escrever partners.ts.'); return; }
    setPartners(nextPartners);
    setPartnerForm(result.data);
    setPartnerErrors({});
    setPartnerMessage('Salvo em src/data/partners.ts.');
  };

  const partnerError = (path: string) => partnerErrors[path] && <p className="mt-1 text-xs text-red-600">{partnerErrors[path]}</p>;
  const error = (path: string) => errors[path] && <p className="mt-1 text-xs text-red-600">{errors[path]}</p>;
  const field = (label: string, value: string, onChange: (value: string) => void, path: string, type = 'text') => {
    const normalizedType = label.includes('ISO 8601') ? 'datetime-local' : type;
    const normalizedLabel = label.replace(' ISO 8601', '');
    const inputValue = normalizedType === 'datetime-local' ? toDateTimeLocal(value) : value;
    const handleChange = (nextValue: string) => onChange(normalizedType === 'datetime-local' ? fromDateTimeLocal(nextValue) : nextValue);

    return (
      <label>
        <span className={labelClass}>{normalizedLabel}</span>
        {normalizedType === 'textarea' ? (
          <textarea className={`${inputClass} min-h-28 resize-y`} value={inputValue} onChange={(event) => handleChange(event.target.value)} />
        ) : (
          <input className={inputClass} type={normalizedType} value={inputValue} onChange={(event) => handleChange(event.target.value)} />
        )}
        {error(path)}
      </label>
    );
  };

  return <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 md:px-8">
    <div className="mx-auto max-w-7xl">
      <header className="mb-8 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-teal-700">Muriaé Tech Connect</p><h1 className="text-3xl font-black">Editor local de eventos</h1></div><a href="/" className="text-sm font-semibold text-blue-700">Voltar ao site</a></header>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-lg bg-white p-4 shadow-sm"><h2 className="mb-3 font-bold">Eventos</h2>{events.map((event, index) => <button className={`mb-2 block w-full rounded px-3 py-2 text-left text-sm ${selected === index ? 'bg-blue-700 text-white' : 'bg-slate-100'}`} key={event.id} onClick={() => selectEvent(index)}>{event.name || 'Sem nome'}</button>)}<button className="mt-2 w-full rounded border border-blue-700 px-3 py-2 text-sm font-bold text-blue-700" onClick={addEvent}>+ Novo evento</button></aside>
        <section className="space-y-6 rounded-lg bg-white p-5 shadow-sm md:p-8"><div className="grid gap-4 md:grid-cols-2">{field('ID', form.id, (id) => update({ id }), 'id')}{field('Slug', form.slug, (slug) => update({ slug }), 'slug')}{field('Nome', form.name, (name) => update({ name }), 'name')}{field('Subtítulo', form.subtitle ?? '', (subtitle) => update({ subtitle }), 'subtitle')}<label><span className={labelClass}>Nicho</span><select className={inputClass} value={form.niche} onChange={(event) => update({ niche: event.target.value as EventFormData['niche'] })}>{['lab', 'educacao', 'para-elas', 'saude', 'start'].map((value) => <option key={value}>{value}</option>)}</select></label><label><span className={labelClass}>Status</span><select className={inputClass} value={form.status} onChange={(event) => update({ status: event.target.value as EventFormData['status'] })}><option>draft</option><option>published</option></select></label>{field('Início ISO 8601', form.dateStart, (dateStart) => update({ dateStart }), 'dateStart')}{field('Fim ISO 8601', form.dateEnd, (dateEnd) => update({ dateEnd }), 'dateEnd')}</div>{error('dateEnd')}
          <fieldset className="border-t border-slate-200 pt-5"><legend className="mb-4 text-lg font-bold">Localização</legend><div className="grid gap-4 md:grid-cols-2">{field('Nome', form.location.name, (name) => updateLocation({ name }), 'location.name')}{field('Endereço', form.location.address, (address) => updateLocation({ address }), 'location.address')}{field('Latitude', String(form.location.geo.lat), (value) => updateLocation({ geo: { ...form.location.geo, lat: Number(value) } }), 'location.geo.lat', 'number')}{field('Longitude', String(form.location.geo.lng), (value) => updateLocation({ geo: { ...form.location.geo, lng: Number(value) } }), 'location.geo.lng', 'number')}{field('Foto URL', form.location.photoUrl, (photoUrl) => updateLocation({ photoUrl }), 'location.photoUrl')}</div></fieldset>
          <fieldset className="border-t border-slate-200 pt-5"><legend className="mb-4 text-lg font-bold">Palestrantes</legend><div className="space-y-4">{form.speakers.map((speaker, index) => <div className="grid gap-3 rounded bg-slate-50 p-4 md:grid-cols-3" key={index}>{field('ID', speaker.id, (id) => updateSpeaker(index, { id }), `speakers.${index}.id`)}{field('Nome', speaker.name, (name) => updateSpeaker(index, { name }), `speakers.${index}.name`)}{field('Cargo', speaker.role, (role) => updateSpeaker(index, { role }), `speakers.${index}.role`)}{field('Organização', speaker.org, (org) => updateSpeaker(index, { org }), `speakers.${index}.org`)}{field('URL organização', speaker.orgUrl ?? '', (orgUrl) => updateSpeaker(index, { orgUrl: orgUrl || undefined }), `speakers.${index}.orgUrl`)}{field('Foto URL', speaker.photoUrl ?? '', (photoUrl) => updateSpeaker(index, { photoUrl: photoUrl || undefined }), `speakers.${index}.photoUrl`)}<button className="text-left text-xs font-bold text-red-600" onClick={() => update({ speakers: form.speakers.filter((_, i) => i !== index) })}>Remover palestrante</button></div>)}</div><button className="mt-3 rounded border px-3 py-2 text-sm" onClick={() => update({ speakers: [...form.speakers, emptySpeaker()] })}>+ Palestrante</button></fieldset>
          <fieldset className="border-t border-slate-200 pt-5"><legend className="mb-4 text-lg font-bold">Programação</legend><div className="space-y-4">{form.schedule.map((item, index) => <div className="grid gap-3 rounded bg-slate-50 p-4 md:grid-cols-3" key={index}>{field('ID', item.id, (id) => updateSchedule(index, { id }), `schedule.${index}.id`)}{field('Título', item.title, (title) => updateSchedule(index, { title }), `schedule.${index}.title`)}<label><span className={labelClass}>Etapa</span><select className={inputClass} value={item.stage} onChange={(event) => updateSchedule(index, { stage: event.target.value as ScheduleItem['stage'] })}>{['credenciamento', 'abertura', 'palestra', 'painel', 'case', 'coffee-break', 'encerramento'].map((value) => <option key={value}>{value}</option>)}</select></label>{field('Início ISO 8601', item.timeStart, (timeStart) => updateSchedule(index, { timeStart }), `schedule.${index}.timeStart`)}{field('Fim ISO 8601', item.timeEnd, (timeEnd) => updateSchedule(index, { timeEnd }), `schedule.${index}.timeEnd`)}{field('Speaker IDs (vírgulas)', item.speakerIds?.join(', ') ?? '', (value) => updateSchedule(index, { speakerIds: value.split(',').map((id) => id.trim()).filter(Boolean) }), `schedule.${index}.speakerIds`)}{field('Destaques (um por linha)', item.highlights?.join('\n') ?? '', (value) => updateSchedule(index, { highlights: value.split('\n').filter(Boolean) }), `schedule.${index}.highlights`, 'textarea')}<button className="text-left text-xs font-bold text-red-600" onClick={() => update({ schedule: form.schedule.filter((_, i) => i !== index) })}>Remover item</button></div>)}</div><button className="mt-3 rounded border px-3 py-2 text-sm" onClick={() => update({ schedule: [...form.schedule, emptySchedule()] })}>+ Item de programação</button></fieldset>
          <div className="flex items-center gap-4 border-t border-slate-200 pt-5"><button className="rounded bg-blue-700 px-5 py-3 font-bold text-white" onClick={save}>Validar e salvar</button>{message && <p className="text-sm font-semibold">{message}</p>}</div>

          <fieldset className="border-t border-slate-200 pt-5"><legend className="mb-4 text-lg font-bold">Parceiros</legend>
            <div className="grid gap-4 md:grid-cols-2">
              <label><span className={labelClass}>ID</span><input className={inputClass} value={partnerForm.id} onChange={(event) => setPartnerForm((current) => ({ ...current, id: event.target.value }))} />{partnerError('id')}</label>
              <label><span className={labelClass}>Nome</span><input className={inputClass} value={partnerForm.name} onChange={(event) => setPartnerForm((current) => ({ ...current, name: event.target.value }))} />{partnerError('name')}</label>
              <label><span className={labelClass}>Tier</span><select className={inputClass} value={partnerForm.tier} onChange={(event) => setPartnerForm((current) => ({ ...current, tier: event.target.value as PartnerFormData['tier'] }))}><option value="principal">principal</option><option value="secundario">secundario</option></select></label>
              <label><span className={labelClass}>Logo</span><input className={inputClass} value={partnerForm.logo} onChange={(event) => setPartnerForm((current) => ({ ...current, logo: event.target.value }))} />{partnerError('logo')}</label>
            </div>
            <div className="mt-4 flex items-center gap-4"><button className="rounded bg-blue-700 px-5 py-3 font-bold text-white" onClick={savePartners}>Salvar parceiros</button>{partnerMessage && <p className="text-sm font-semibold">{partnerMessage}</p>}</div>
          </fieldset>
        </section>
      </div>
    </div>
  </main>;
}
