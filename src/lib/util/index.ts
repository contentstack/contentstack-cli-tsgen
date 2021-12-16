export function supportGraphql(contentType: any) {
	contentType.schema = contentType.schema.map((element: any) => {
		if (element.data_type === 'reference') {
			element.uid += 'Connection'
		}
		return element
	})
	return contentType
}